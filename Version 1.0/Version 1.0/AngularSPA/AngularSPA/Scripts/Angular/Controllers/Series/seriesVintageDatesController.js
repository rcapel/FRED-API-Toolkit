"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesVintageDatesController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/vintagedates";
				seriesControllerBase.initialize($scope, function (api) {
					api.results = "/Views/Series/datesResults.html";
					api.initialOrderByColumn = "toString()";
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());