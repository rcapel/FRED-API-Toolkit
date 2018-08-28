"use strict";
(function () {

	angular.module("appModule")
		.service("sourcesControllerBase", ["$routeParams", "controllerBase",
			function ($routeParams, controllerBase) {
				return {
					initialize: function (scope, customizer) {
						var api = {
							form: "/Views/Sources/form.html",
							hint: "source_id=1",
							results: "/Views/Common/sourcesResults.html",
							initialOrderByColumn: "id",
						};
						if (customizer != null) {
							customizer(api);
						};

						controllerBase.initializeApi(scope, api);

						scope.onFormSubmit = function () {
							controllerBase.redirect(scope.fredPath + "/id/" + scope.sourceId);
						};
						scope.$parent.sourceId = $routeParams.sourceId != null ? parseInt($routeParams.sourceId) : null;
					},
					fetch: function (scope, canFetch, urlExtension) {
						canFetch = canFetch != null ? canFetch : scope.sourceId != null;
						if (canFetch) {
							urlExtension = urlExtension != null ? (urlExtension.startsWith("/") ? "" : "/") + urlExtension : "/" + scope.sourceId;
							controllerBase.fetch(scope, "sources" + scope.fredPath + urlExtension);
						};
					}
				}
			}
		]);

}());