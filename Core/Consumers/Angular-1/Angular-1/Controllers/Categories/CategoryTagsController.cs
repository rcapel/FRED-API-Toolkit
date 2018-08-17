using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Categories.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Categories
{
	[Route("api/[controller]")]
	public class CategoryTagsController : ControllerBase
	{
		#region fields

		private readonly ICategoryTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategoryTagsController> logger;

		#endregion

		#region constructors

		public CategoryTagsController(
			ICategoryTags api,
			IAppSettings appSettings,
			ILogger<CategoryTagsController> logger)
		{
			this.api = api;
			this.appSettings = appSettings;
			this.logger = logger;
		}

		#endregion

		#region public methods

		[Produces("application/json")]
		[ProducesResponseType(200, Type = typeof(string))]
		[ProducesResponseType(500, Type = typeof(string))]
		[HttpGet("{id}")]
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.category_id = id;
				api.Arguments.realtime_start = realtime_start == null ? api.Arguments.realtime_start : realtime_start;
				api.Arguments.realtime_end = realtime_end == null ? api.Arguments.realtime_end : realtime_end;
				api.Arguments.limit = limit == null ? api.Arguments.limit : limit;
				api.Arguments.offset = offset == null ? api.Arguments.offset : offset;
				if (order_by != null)
				{
					tags_order_by_values orderBy = 0;
					if (Enum.TryParse<tags_order_by_values>(order_by, out orderBy))
					{
						api.Arguments.order_by = orderBy;
					}
				}
				if (sort_order != null)
				{
					sort_order_values sortOrder = 0;
					if (Enum.TryParse<sort_order_values>(sort_order, out sortOrder))
					{
						api.Arguments.sort_order = sortOrder;
					}
				}
				api.Arguments.tag_names = tag_names == null ? api.Arguments.tag_names : tag_names;
				if (tag_group_id != null)
				{
					tag_group_id_values tagGroupId = 0;
					if (Enum.TryParse<tag_group_id_values>(tag_group_id, out tagGroupId))
					{
						api.Arguments.tag_group_id = tagGroupId;
					}
				}
				api.Arguments.search_text = search_text == null ? api.Arguments.search_text : search_text;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategoryTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

		#region private methods

		//private Tuple<bool, T> ParseEnum<T>(string enumString)
		//{
		//	Tuple<bool, string> result = null;

		//	if (enumString != null)
		//	{
		//		T result = 0;
		//		if (Enum.TryParse<sort_order_values>(enumString, out result))
		//		{
		//			api.Arguments.sort_order = result;
		//		}
		//	}
		//}

		#endregion

	}

}