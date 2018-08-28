"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesSearchController", ["$scope", "$routeParams", "seriesControllerBase", "controllerBase",
			function ($scope, $routeParams, seriesControllerBase, controllerBase) {
				$scope.fredPath = "/series/search";
				seriesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Series/searchForm.html";
					api.hint = "search_text=monetary service index";
				});

				// override initial default values
				$scope.onFormSubmit = function () {
					controllerBase.redirect($scope.fredPath + "/search_text/" + $scope.searchText);
				};
				$scope.$parent.searchText = $routeParams.search_text != null ? $routeParams.search_text : null;

				seriesControllerBase.fetch($scope,
					$scope.searchText != null,
					"search_text/" + $scope.searchText);
			}
		]);

}());