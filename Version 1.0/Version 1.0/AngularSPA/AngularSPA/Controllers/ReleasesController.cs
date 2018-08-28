using FRED.API.Releases.APIFacades;
using FRED.API.Releases.Arguments;
using FRED.API.Releases.Data;
using FRED.API.Series.Data;
using FRED.API.Sources.Data;
using FRED.API.Tags.Data;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	[RoutePrefix("releases")]
	public class ReleasesController : FREDController
    {
		[Route("releases")]
		[HttpGet]
		public async Task<Response<ReleasesContainer>> FetchReleases()
		{
			return await FetchAsync<Releases, ReleasesArguments, ReleasesContainer>(new ReleasesArguments());
		}

		[Route("releases/dates")]
		[HttpGet]
		public async Task<Response<ReleasesDateContainer>> FetchReleasesDates()
		{
			return await FetchAsync<ReleasesDates, ReleasesDatesArguments, ReleasesDateContainer>(new ReleasesDatesArguments());
		}

		[Route("release/{id:int}")]
		[HttpGet]
		public async Task<Response<ReleaseContainer>> FetchRelease(int id)
		{
			return await FetchAsync<Release, ReleaseArguments, ReleaseContainer>(new ReleaseArguments { release_id = id });
		}

		[Route("release/dates/{id:int}")]
		[HttpGet]
		public async Task<Response<ReleaseDateContainer>> FetchReleaseDates(int id)
		{
			return await FetchAsync<ReleaseDates, ReleaseDatesArguments, ReleaseDateContainer>(new ReleaseDatesArguments { release_id = id });
		}

		[Route("release/series/{id:int}")]
		[HttpGet]
		public async Task<Response<SeriesContainer>> FetchReleaseSeries(int id)
		{
			return await FetchAsync<ReleaseSeries, ReleaseSeriesArguments, SeriesContainer>(new ReleaseSeriesArguments { release_id = id });
		}

		[Route("release/sources/{id:int}")]
		[HttpGet]
		public async Task<Response<SourceContainer>> FetchReleaseSources(int id)
		{
			return await FetchAsync<ReleaseSources, ReleaseSourcesArguments, SourceContainer>(new ReleaseSourcesArguments { release_id = id });
		}

		[Route("release/tags/{id:int}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchReleaseTags(int id)
		{
			return await FetchAsync<ReleaseTags, ReleaseTagsArguments, TagContainer>(new ReleaseTagsArguments { release_id = id });
		}

		[Route("release/related_tags/{id:int}/tag_names/{tagNames}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchReleaseRelatedTags(int id, string tagNames)
		{
			return await FetchAsync<ReleaseRelatedTags, ReleaseRelatedTagsArguments, TagContainer>(new ReleaseRelatedTagsArguments { release_id = id, tag_names = tagNames });
		}

	}
}
