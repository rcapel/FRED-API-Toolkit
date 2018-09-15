using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
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
			ILogger<CategoryTagsController> logger) : base()
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

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderByValue = ParseEnum<tags_order_by_values>(order_by);
				api.Arguments.order_by = orderByValue ?? api.Arguments.order_by;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				api.Arguments.tag_names = tag_names;

				var tagGroupId = ParseEnum<tag_group_id_values>(tag_group_id);
				api.Arguments.tag_group_id = tagGroupId ?? api.Arguments.tag_group_id;

				api.Arguments.search_text = search_text ?? api.Arguments.search_text;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategoryTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}