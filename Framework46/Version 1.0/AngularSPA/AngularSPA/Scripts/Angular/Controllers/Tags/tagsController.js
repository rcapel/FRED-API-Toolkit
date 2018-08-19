"use strict";
(function () {

	angular.module("appModule")
		.controller("tagsController", ["$scope", "tagsControllerBase",
			function ($scope, tagsControllerBase) {
				$scope.fredPath = "/tags";
				tagsControllerBase.initialize($scope, function (api) {
					api.form = "/Views/Common/form.html";
				});
				tagsControllerBase.fetch($scope, true, "");
			}
		]);

}());