"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesReleaseController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/release";
				seriesControllerBase.initialize($scope, function (api) {
					api.hint = "series_id=IRA";
					api.results = "/Views/Common/releasesResults.html";
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());