"use strict";
(function () {

	angular.module("appModule")
		.service("seriesControllerBase", ["$routeParams", "controllerBase",
			function ($routeParams, controllerBase) {
				return {
					initialize: function (scope, customizer) {
						var api = {
							form: "/Views/Series/form.html",
							hint: "series_id=GNPCA",
							results: "/Views/Common/seriesResults.html",
							initialOrderByColumn: "id",
						};
						if (customizer != null) {
							customizer(api);
						};

						controllerBase.initializeApi(scope, api);

						scope.onFormSubmit = function () {
							controllerBase.redirect(scope.fredPath + "/id/" + scope.seriesId);
						};
						scope.$parent.seriesId = $routeParams.seriesId != null ? $routeParams.seriesId : null;
					},
					fetch: function (scope, canFetch, urlExtension) {
						canFetch = canFetch != null ? canFetch : scope.seriesId != null;
						if (canFetch) {
							urlExtension = urlExtension != null ? (urlExtension.startsWith("/") ? "" : "/") + urlExtension : "/" + scope.seriesId;
							controllerBase.fetch(scope, "series" + scope.fredPath + urlExtension);
						};
					}
				}
			}
		]);

}());