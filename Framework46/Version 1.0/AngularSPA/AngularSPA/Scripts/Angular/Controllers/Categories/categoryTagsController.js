"use strict";
(function () {

	angular.module("appModule")
		.controller("categoryTagsController", ["$scope", "categoriesControllerBase",
			function ($scope, categoriesControllerBase) {
				$scope.fredPath = "/category/tags";
				categoriesControllerBase.initialize($scope, function (api) {
					api.results = "/Views/Common/tagsResults.html";
					api.initialOrderByColumn = "name";
				});
				categoriesControllerBase.fetch($scope);
			}
		]);

}());
