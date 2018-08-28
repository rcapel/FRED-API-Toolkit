"use strict";
(function () {

	var app = angular.module("appModule", ["ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/main", {
				templateUrl: function () {
					return "/Views/main.html"
				},
      			controller: "mainController"
			})

			//
			// categories
			//
			.when("/category", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryController"
			})
			.when("/category/id/:categoryId", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryController"
			})
			.when("/category/children", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryChildrenController"
			})
			.when("/category/children/id/:categoryId", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryChildrenController"
			})
			.when("/category/related", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryRelatedController"
			})
			.when("/category/related/id/:categoryId", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryRelatedController"
			})
			.when("/category/series", {
				templateUrl: "/Views/Common/template.html",
				controller: "categorySeriesController"
			})
			.when("/category/series/id/:categoryId", {
				templateUrl: "/Views/Common/template.html",
				controller: "categorySeriesController"
			})
			.when("/category/tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryTagsController"
			})
			.when("/category/tags/id/:categoryId", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryTagsController"
			})
			.when("/category/related_tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryRelatedTagsController"
			})
			.when("/category/related_tags/id/:categoryId/tag_names/:tag_names", {
				templateUrl: "/Views/Common/template.html",
				controller: "categoryRelatedTagsController"
			})

			//
			// releases
			//
			.when("/releases", {
				templateUrl: "/Views/Common/template.html",
				controller: "releasesController"
			})
			.when("/releases/dates", {
				templateUrl: "/Views/Common/template.html",
				controller: "releasesDatesController"
			})
			.when("/release", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseController"
			})
			.when("/release/id/:releaseId", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseController"
			})
			.when("/release/dates", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseDatesController"
			})
			.when("/release/dates/id/:releaseId", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseDatesController"
			})
			.when("/release/series", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseSeriesController"
			})
			.when("/release/series/id/:releaseId", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseSeriesController"
			})
			.when("/release/sources", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseSourcesController"
			})
			.when("/release/sources/id/:releaseId", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseSourcesController"
			})
			.when("/release/tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseTagsController"
			})
			.when("/release/tags/id/:releaseId", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseTagsController"
			})
			.when("/release/related_tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseRelatedTagsController"
			})
			.when("/release/related_tags/id/:releaseId/tag_names/:tag_names", {
				templateUrl: "/Views/Common/template.html",
				controller: "releaseRelatedTagsController"
			})

			//
			// series
			//
			.when("/series", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesController"
			})
			.when("/series/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesController"
			})
			.when("/series/categories", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesCategoriesController"
			})
			.when("/series/categories/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesCategoriesController"
			})
			.when("/series/observations", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesObservationsController"
			})
			.when("/series/observations/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesObservationsController"
			})
			.when("/series/release", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesReleaseController"
			})
			.when("/series/release/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesReleaseController"
			})
			.when("/series/search", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchController"
			})
			.when("/series/search/search_text/:search_text", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchController"
			})
			.when("/series/search/tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchTagsController"
			})
			.when("/series/search/tags/series_search_text/:series_search_text", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchTagsController"
			})
			.when("/series/search/related_tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchRelatedTagsController"
			})
			.when("/series/search/related_tags/series_search_text/:series_search_text/tag_names/:tag_names", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesSearchRelatedTagsController"
			})
			.when("/series/tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesTagsController"
			})
			.when("/series/tags/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesTagsController"
			})
			.when("/series/updates", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesUpdatesController"
			})
			.when("/series/vintagedates", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesVintageDatesController"
			})
			.when("/series/vintagedates/id/:seriesId", {
				templateUrl: "/Views/Common/template.html",
				controller: "seriesVintageDatesController"
			})

			//
			// sources
			//
			.when("/sources", {
				templateUrl: "/Views/Common/template.html",
				controller: "sourcesController"
			})
			.when("/source", {
				templateUrl: "/Views/Common/template.html",
				controller: "sourceController"
			})
			.when("/source/id/:sourceId", {
				templateUrl: "/Views/Common/template.html",
				controller: "sourceController"
			})
			.when("/source/releases", {
				templateUrl: "/Views/Common/template.html",
				controller: "sourceReleasesController"
			})
			.when("/source/releases/id/:sourceId", {
				templateUrl: "/Views/Common/template.html",
				controller: "sourceReleasesController"
			})

			//
			// tags
			//
			.when("/tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "tagsController"
			})
			.when("/related_tags", {
				templateUrl: "/Views/Common/template.html",
				controller: "relatedTagsController"
			})
			.when("/related_tags/tag_names/:tag_names", {
				templateUrl: "/Views/Common/template.html",
				controller: "relatedTagsController"
			})
			.when("/tags/series", {
				templateUrl: "/Views/Common/template.html",
				controller: "tagsSeriesController"
			})
			.when("/tags/series/tag_names/:tag_names", {
				templateUrl: "/Views/Common/template.html",
				controller: "tagsSeriesController"
			})

			//
			// default
			//
			.otherwise({
				redirectTo: "/main"
			})
	});

}());