"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesObservationsController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/observations";
				seriesControllerBase.initialize($scope, function (api) {
					api.results = "/Views/Series/observationsResults.html";
					api.initialOrderByColumn = "date";
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());