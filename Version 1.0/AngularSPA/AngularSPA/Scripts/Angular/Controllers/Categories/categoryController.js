"use strict";
(function () {

	angular.module("appModule")
		.controller("categoryController", ["$scope", "categoriesControllerBase",
			function ($scope, categoriesControllerBase) {
				$scope.fredPath = "/category";
				categoriesControllerBase.initialize($scope, function (api) {
					api.initialOrderByColumn = null;
				});
				categoriesControllerBase.fetch($scope);
			}
		]);

}());