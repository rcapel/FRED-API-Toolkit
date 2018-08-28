using FRED.API.Categories.APIFacades;
using FRED.API.Categories.Arguments;
using FRED.API.Categories.Data;
using FRED.API.Series.Data;
using FRED.API.Tags.Data;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	[RoutePrefix("categories")]
	public class CategoriesController : FREDController
    {
		[Route("category/{id:int}")]
		[HttpGet]
		public async Task<Response<CategoryContainer>> FetchCategory(int id)
		{
			return await FetchAsync<Category, CategoryArguments, CategoryContainer>(new CategoryArguments { category_id = id });
		}

		[Route("category/children/{id:int}")]
		[HttpGet]
		public async Task<Response<CategoryContainer>> FetchCategoryChildren(int id)
		{
			return await FetchAsync<CategoryChildren, CategoryChildrenArguments, CategoryContainer>(new CategoryChildrenArguments { category_id = id });
		}

		[Route("category/related/{id:int}")]
		[HttpGet]
		public async Task<Response<CategoryContainer>> FetchCategoryRelated(int id)
		{
			return await FetchAsync<CategoryRelated, CategoryRelatedArguments, CategoryContainer>(new CategoryRelatedArguments { category_id = id });
		}

		[Route("category/series/{id:int}")]
		[HttpGet]
		public async Task<Response<SeriesContainer>> FetchCategorySeries(int id)
		{
			return await FetchAsync<CategorySeries, CategorySeriesArguments, SeriesContainer>(new CategorySeriesArguments { category_id = id });
		}

		[Route("category/tags/{id:int}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchCategoryTags(int id)
		{
			return await FetchAsync<CategoryTags, CategoryTagsArguments, TagContainer>(new CategoryTagsArguments { category_id = id });
		}

		[Route("category/related_tags/{id:int}/tag_names/{tagNames}")]
		[HttpGet]
		public async Task<Response<TagContainer>> FetchCategoryRelatedTags(int id, string tagNames)
		{
			return await FetchAsync<CategoryRelatedTags, CategoryRelatedTagsArguments, TagContainer>(new CategoryRelatedTagsArguments { category_id = id, tag_names = tagNames });
		}

	}
}
