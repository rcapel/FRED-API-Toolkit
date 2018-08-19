"use strict";
(function () {

	angular.module("appModule")
		.controller("tagsSeriesController", ["$scope", "tagsControllerBase",
			function ($scope, tagsControllerBase) {
				$scope.fredPath = "/tags/series";
				tagsControllerBase.initialize($scope, function (api) {
					api.hint = "tag_names=slovenia;food;oecd";
					api.results = "/Views/Common/seriesResults.html";
					api.initialOrderByColumn = "id";
				});
				tagsControllerBase.fetch($scope);
			}
		]);

}());
