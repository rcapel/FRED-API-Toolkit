"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesCategoriesController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/categories";
				seriesControllerBase.initialize($scope, function (api) {
					api.hint = "series_id=EXJPUS";
					api.results = "/Views/Common/categoriesResults.html";
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());