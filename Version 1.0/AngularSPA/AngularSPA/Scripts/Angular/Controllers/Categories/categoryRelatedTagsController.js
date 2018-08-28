"use strict";
(function () {

	angular.module("appModule")
		.controller("categoryRelatedTagsController", ["$scope", "$routeParams", "categoriesControllerBase", "controllerBase",
			function ($scope, $routeParams, categoriesControllerBase, controllerBase) {
				$scope.fredPath = "/category/related_tags";
				categoriesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Categories/relatedTagsForm.html";
					api.results = "/Views/Common/tagsResults.html";
					api.initialOrderByColumn = "name";
				});

				// override initial default values
				$scope.onFormSubmit = function () {
					controllerBase.redirect($scope.fredPath + "/id/" + $scope.categoryId + "/tag_names/" + $scope.tagNames);
				};
				$scope.$parent.tagNames = $routeParams.tag_names != null ? $routeParams.tag_names : null;

				categoriesControllerBase.fetch($scope,
					$scope.categoryId != null && $scope.tagNames != null,
					$scope.categoryId + "/tag_names/" + $scope.tagNames);
			}
		]);

}());
