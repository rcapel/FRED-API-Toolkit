"use strict";
(function () {

	angular.module("appModule")
		.factory("orderByService", [function () {

			return {
				initialize: function (scope, initialOrderByColumn, ignoreColumns) {
					scope.column = initialOrderByColumn;
					scope.orderBy = function (columnClicked) {
						if (ignoreColumns != null && ignoreColumns.indexOf(columnClicked) > -1)
							return;
						scope.reverse = (scope.column === columnClicked) ? !scope.reverse : false;
						scope.column = columnClicked;
					};
				}
			};

		}
		]);

}());