"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesUpdatesController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/updates";
				seriesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Common/form.html";
				});
				seriesControllerBase.fetch($scope, true, "");
			}
		]);

}());