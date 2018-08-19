using FRED.API.Sources.APIFacades;
using FRED.API.Sources.Arguments;
using FRED.API.Sources.Data;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	[RoutePrefix("sources")]
	public class SourcesController : FREDController
	{
		[Route("sources")]
		[HttpGet]
		public async Task<Response<SourcesContainer>> FetchSources()
		{
			return await FetchAsync<Sources, SourcesArguments, SourcesContainer>(new SourcesArguments());
		}

		[Route("source/{sourceId:int}")]
		[HttpGet]
		public async Task<Response<SourceContainer>> FetchSource(int sourceId)
		{
			return await FetchAsync<Source, SourceArguments, SourceContainer>(new SourceArguments { source_id = sourceId });
		}

		[Route("source/releases/{sourceId:int}")]
		[HttpGet]
		public async Task<Response<SourceReleasesContainer>> FetchSourceReleases(int sourceId)
		{
			return await FetchAsync<SourceReleases, SourceReleasesArguments, SourceReleasesContainer>(new SourceReleasesArguments { source_id = sourceId });
		}

	}
}
