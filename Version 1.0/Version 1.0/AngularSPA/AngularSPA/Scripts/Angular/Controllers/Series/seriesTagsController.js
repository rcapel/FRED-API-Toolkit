"use strict";
(function () {

	angular.module("appModule")
		.controller("seriesTagsController", ["$scope", "seriesControllerBase",
			function ($scope, seriesControllerBase) {
				$scope.fredPath = "/series/tags";
				seriesControllerBase.initialize($scope, function (api) {
					api.hint = "series_id=STLFSI";
					api.results = "/Views/Common/tagsResults.html";
					api.initialOrderByColumn = "name";
				});
				seriesControllerBase.fetch($scope);
			}
		]);

}());