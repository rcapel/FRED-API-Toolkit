"use strict";
(function () {

	angular.module("appModule")
		.controller("categoryChildrenController", ["$scope", "categoriesControllerBase",
			function ($scope, categoriesControllerBase) {
				$scope.fredPath = "/category/children";
				categoriesControllerBase.initialize($scope, function (api) {
					api.hint = "category_id=13";
					api.ignoreOrderByColumns = ["parent_id"];
				});
				categoriesControllerBase.fetch($scope);
			}
		]);

}());