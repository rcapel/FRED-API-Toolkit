"use strict";
(function () {

	angular.module("appModule")
		.service("tagsControllerBase", ["$routeParams", "controllerBase",
			function ($routeParams, controllerBase) {
				return {
					initialize: function (scope, customizer) {
						var api = {
							form: "/Views/Tags/form.html",
							results: "/Views/Common/tagsResults.html",
							initialOrderByColumn: "name"
						};
						if (customizer != null) {
							customizer(api);
						};

						controllerBase.initializeApi(scope, api);

						scope.onFormSubmit = function () {
							controllerBase.redirect(scope.fredPath + "/tag_names/" + scope.tagNames);
						};
						scope.$parent.tagNames = $routeParams.tag_names != null ? $routeParams.tag_names : null;
					},
					fetch: function (scope, canFetch, urlExtension) {
						canFetch = canFetch != null ? canFetch : scope.tagNames != null;
						if (canFetch) {
							urlExtension = urlExtension != null ? (urlExtension.startsWith("/") ? "" : "/") + urlExtension : "/tag_names/" + scope.tagNames;
							controllerBase.fetch(scope, "tags" + scope.fredPath + urlExtension);
						};
					}
				}
			}
		]);

}());