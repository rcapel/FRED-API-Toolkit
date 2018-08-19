using FRED.API.Tags.APIFacades;
using FRED.API.Tags.Arguments;
using FRED.API.Tags.Data;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	[RoutePrefix("tags")]
	public class TagsController : FREDController
    {
		[Route("tags")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchTags()
		{
			return await FetchAsync<Tags, TagsArguments, TagContainer>(new TagsArguments());
		}

		[Route("related_tags/tag_names/{tagNames}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchRelatedTags(string tagNames)
		{
			return await FetchAsync<RelatedTags, RelatedTagsArguments, TagContainer>(new RelatedTagsArguments { tag_names = tagNames });
		}

		[Route("tags/series/tag_names/{tagNames}")]
		[HttpGet]
		public async Task<Response<TagSeriesContainer>> FetchTagsSeries(string tagNames)
		{
			return await FetchAsync<TagsSeries, TagsSeriesArguments, TagSeriesContainer>(new TagsSeriesArguments { tag_names = tagNames });
		}

	}
}
