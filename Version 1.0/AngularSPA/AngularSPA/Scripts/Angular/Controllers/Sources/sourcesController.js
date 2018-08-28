"use strict";
(function () {

	angular.module("appModule")
		.controller("sourcesController", ["$scope", "sourcesControllerBase",
			function ($scope, sourcesControllerBase) {
				$scope.fredPath = "/sources";
				sourcesControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Common/form.html";
				});
				sourcesControllerBase.fetch($scope, true, "");
			}
		]);

}());