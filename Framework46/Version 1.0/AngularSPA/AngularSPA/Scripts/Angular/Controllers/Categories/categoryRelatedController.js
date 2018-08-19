"use strict";
(function () {

	angular.module("appModule")
		.controller("categoryRelatedController", ["$scope", "categoriesControllerBase",
			function ($scope, categoriesControllerBase) {
				$scope.fredPath = "/category/related";
				categoriesControllerBase.initialize($scope, function (api) {
					api.hint = "category_id=32073";
				});
				categoriesControllerBase.fetch($scope);
			}
		]);

}());
