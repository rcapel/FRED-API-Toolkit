"use strict";
(function () {

	angular.module("appModule")
		.controller("relatedTagsController", ["$scope", "tagsControllerBase",
			function ($scope, tagsControllerBase) {
				$scope.fredPath = "/related_tags";
				tagsControllerBase.initialize($scope, function (api) {
					api.hint = "tag_names=monetary aggregates;weekly";
				});
				tagsControllerBase.fetch($scope);
			}
		]);

}());
