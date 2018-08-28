"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesSearchTagsController", ["$scope", "$routeParams", "seriesControllerBase", "controllerBase",
			function ($scope, $routeParams, seriesControllerBase, controllerBase) {
				$scope.fredPath = "/series/search/tags";
				seriesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Series/searchTagsForm.html";
					api.results = "/Views/Common/tagsResults.html";
					api.initialOrderByColumn = "name";
				});

				// override initial default values
				$scope.onFormSubmit = function () {
					controllerBase.redirect($scope.fredPath + "/series_search_text/" + $scope.seriesSearchText);
				};
				$scope.$parent.seriesSearchText = $routeParams.series_search_text != null ? $routeParams.series_search_text : null;

				seriesControllerBase.fetch($scope,
					$scope.seriesSearchText != null,
					"series_search_text/" + $scope.seriesSearchText);
			}
		]);

}());