"use strict";
(function () {

	angular.module("appModule")
		.controller("sourceReleasesController", ["$scope", "sourcesControllerBase",
			function ($scope, sourcesControllerBase) {
				$scope.fredPath = "/source/releases";
				sourcesControllerBase.initialize($scope, function (api) {
					api.results = "/Views/Common/releasesResults.html";
				});
				sourcesControllerBase.fetch($scope);
			}
		]);

}());