using FRED.API.Categories.Data;
using FRED.API.Releases.Data;
using FRED.API.Series.APIFacades;
using FRED.API.Series.Arguments;
using FRED.API.Series.Data;
using FRED.API.Tags.Data;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	[RoutePrefix("series")]
	public class SeriesController : FREDController
	{
		[Route("series/{id}")]
		[HttpGet]
		public async Task<Response<SingleSeriesContainer>> FetchSeries(string id)
		{
			return await FetchAsync<Series, SeriesArguments, SingleSeriesContainer>(new SeriesArguments { series_id = id });
		}

		[Route("series/categories/{id}")]
		[HttpGet]
		public async Task<Response<CategoryContainer>> FetchSeriesCategories(string id)
		{
			return await FetchAsync<SeriesCategories, SeriesCategoriesArguments, CategoryContainer>(new SeriesCategoriesArguments { series_id = id });
		}

		[Route("series/observations/{id}")]
		[HttpGet]
		public async Task<Response<ObservationContainer>> FetchSeriesObservations(string id)
		{
			return await FetchAsync<SeriesObservations, SeriesObservationsArguments, ObservationContainer>(new SeriesObservationsArguments { series_id = id });
		}

		[Route("series/release/{id}")]
		[HttpGet]
		public async Task<Response<ReleaseContainer>> FetchSeriesRelease(string id)
		{
			return await FetchAsync<SeriesRelease, SeriesReleaseArguments, ReleaseContainer>(new SeriesReleaseArguments { series_id = id });
		}

		[Route("series/search/search_text/{searchText}")]
		[HttpGet]
		public async Task<Response<SeriesSearchContainer>> FetchSeriesSearch(string searchText)
		{
			return await FetchAsync<SeriesSearch, SeriesSearchArguments, SeriesSearchContainer>(new SeriesSearchArguments { search_text = searchText });
		}

		[Route("series/search/tags/series_search_text/{seriesSearchText}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchSeriesSearchTags(string seriesSearchText)
		{
			return await FetchAsync<SeriesSearchTags, SeriesSearchTagsArguments, TagContainer>(new SeriesSearchTagsArguments { series_search_text = seriesSearchText });
		}

		[Route("series/search/related_tags/series_search_text/{seriesSearchText}/tag_names/{tagNames}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchSeriesSearchRelatedTags(string seriesSearchText, string tagNames)
		{
			return await FetchAsync<SeriesSearchRelatedTags, SeriesSearchRelatedTagsArguments, TagContainer>(
				new SeriesSearchRelatedTagsArguments { series_search_text = seriesSearchText, tag_names = tagNames });
		}

		[Route("series/tags/{id}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchSeriesTags(string id)
		{
			return await FetchAsync<SeriesTags, SeriesTagsArguments, TagContainer>(new SeriesTagsArguments { series_id = id });
		}

		[Route("series/updates")]
		[HttpGet]
		public async Task<Response<SeriesUpdateContainer>> FetchSeriesUpdates()
		{
			return await FetchAsync<SeriesUpdates, SeriesUpdatesArguments, SeriesUpdateContainer>(new SeriesUpdatesArguments());
		}

		[Route("series/vintagedates/{id}")]
		[HttpGet]
		public async Task<Response<VintageDateContainer>> FetchSeriesVintageDates(string id)
		{
			return await FetchAsync<SeriesVintageDates, SeriesVintageDatesArguments, VintageDateContainer>(new SeriesVintageDatesArguments { series_id = id });
		}

	}
}
