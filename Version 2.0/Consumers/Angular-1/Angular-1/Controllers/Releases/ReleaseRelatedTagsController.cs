using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
using FRED.Api.Releases.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Releases
{
	[Route("api/[controller]")]
	public class ReleaseRelatedTagsController : ControllerBase
	{
		#region fields

		private readonly IReleaseRelatedTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleaseRelatedTagsController> logger;

		#endregion

		#region constructors

		public ReleaseRelatedTagsController(
			IReleaseRelatedTags api,
			IAppSettings appSettings,
			ILogger<ReleaseRelatedTagsController> logger) : base()
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
		[HttpGet("{id}/{tag_names}")]
		public async Task<IActionResult> GetAsync(int id, string tag_names, 
			DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string exclude_tag_names, string tag_group_id, string search_text)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.release_id = id;
				api.Arguments.tag_names = tag_names;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderBy = ParseEnum<tags_order_by_values>(order_by);
				api.Arguments.order_by = orderBy ?? api.Arguments.order_by;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				var tagGroupId = ParseEnum<tag_group_id_values>(tag_group_id);
				api.Arguments.tag_group_id = tagGroupId ?? api.Arguments.tag_group_id;

				api.Arguments.exclude_tag_names = exclude_tag_names ?? api.Arguments.exclude_tag_names;
				api.Arguments.search_text = search_text ?? api.Arguments.search_text;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "ReleaseRelatedTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}