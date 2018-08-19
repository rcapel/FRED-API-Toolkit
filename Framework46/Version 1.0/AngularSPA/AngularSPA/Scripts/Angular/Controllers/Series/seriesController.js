"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series";
				seriesControllerBase.initialize($scope, function (api) {
					api.initialOrderByColumn = null;
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());