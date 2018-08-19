"use strict";
(function () {

	angular.module("appModule")
		.controller("sourceController", ["$scope", "sourcesControllerBase",
			function ($scope, sourcesControllerBase) {
				$scope.fredPath = "/source";
				sourcesControllerBase.initialize($scope, function (api) {
					api.initialOrderByColumn = null;
				});
				sourcesControllerBase.fetch($scope);
			}
		]);

}());