"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesSearchRelatedTagsController", ["$scope", "$routeParams", "seriesControllerBase", "controllerBase",
			function ($scope, $routeParams, seriesControllerBase, controllerBase) {
				$scope.fredPath = "/series/search/related_tags";
				seriesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Series/searchRelatedTagsForm.html";
					api.results = "/Views/Common/tagsResults.html";
					api.initialOrderByColumn = "name";
				});

				// override initial default values
				$scope.onFormSubmit = function () {
					controllerBase.redirect($scope.fredPath + "/series_search_text/" + $scope.seriesSearchText + "/tag_names/" + $scope.tagNames);
				};
				$scope.$parent.seriesSearchText = $routeParams.series_search_text != null ? $routeParams.series_search_text : null;
				$scope.$parent.tagNames = $routeParams.tag_names != null ? $routeParams.tag_names : null;

				seriesControllerBase.fetch($scope,
					$scope.seriesSearchText != null && $scope.tagNames != null,
					"series_search_text/" + $scope.seriesSearchText + "/tag_names/" + $scope.tagNames);
			}
		]);

}());