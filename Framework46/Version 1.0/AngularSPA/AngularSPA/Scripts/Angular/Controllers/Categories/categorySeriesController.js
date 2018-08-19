"use strict";
(function () {

	angular.module("appModule")
		.controller("categorySeriesController", ["$scope", "categoriesControllerBase",
			function ($scope, categoriesControllerBase) {
				$scope.fredPath = "/category/series";
				categoriesControllerBase.initialize($scope, function (api) {
					api.results = "/Views/Common/seriesResults.html";
				});
				categoriesControllerBase.fetch($scope);
			}
		]);

}());