"use strict";
(function () {

	angular.module("appModule")
		.service("controllerBase", ["$location", "orderByService", "$http",
			function ($location, orderByService, $http) {
				return {
					initializeApi: function (scope, api) {
						api.orderByEnabled = api.initialOrderByColumn != null;
						if (api.orderByEnabled) {
							orderByService.initialize(scope, api.initialOrderByColumn, api.ignoreOrderByColumns);
						}
						scope.api = api;
					},
					redirect: function (path) {
						if ($location.path() != path) {
							$location.path(path);
						}
					},
					fetch: function (scope, uri) {
						scope.column = scope.api.initialOrderByColumn;
						scope.reverse = false;
						$http.get(uri)
							.then(
								function (response) {
									scope.response = response.data;
									scope.container = response.data.container;
								},
								function (response) {
									scope.error = response;
								}
							);
					}
				}
			}
		]);

}());
