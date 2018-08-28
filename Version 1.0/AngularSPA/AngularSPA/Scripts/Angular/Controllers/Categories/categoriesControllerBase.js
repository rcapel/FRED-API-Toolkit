"use strict";
(function () {

	angular.module("appModule")
		.service("categoriesControllerBase", ["$routeParams", "controllerBase",
			function ($routeParams, controllerBase) {
				return {
					initialize: function (scope, customizer) {
						var api = {
							form: "/Views/Categories/form.html",
							hint: "category_id=125",
							results: "/Views/Common/categoriesResults.html",
							initialOrderByColumn: "id"
						};
						if (customizer != null) {
							customizer(api);
						};

						controllerBase.initializeApi(scope, api);

						scope.onFormSubmit = function () {
							controllerBase.redirect(scope.fredPath + "/id/" + scope.categoryId);
						};
						scope.$parent.categoryId = $routeParams.categoryId != null ? parseInt($routeParams.categoryId) : null;
					},
					fetch: function (scope, canFetch, urlExtension) {
						canFetch = canFetch != null ? canFetch : scope.categoryId != null;
						if (canFetch) {
							urlExtension = urlExtension != null ? (urlExtension.startsWith("/") ? "" : "/") + urlExtension : "/" + scope.categoryId;
							controllerBase.fetch(scope, "categories" + scope.fredPath + urlExtension);
						};
					}
				}
			}
		]);

}());