using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Series
{
	[Route("api/[controller]")]
	public class SeriesSearchTagsController : ControllerBase
	{
		#region fields

		private readonly ISeriesSearchTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesSearchTagsController> logger;

		#endregion

		#region constructors

		public SeriesSearchTagsController(
			ISeriesSearchTags api,
			IAppSettings appSettings,
			ILogger<SeriesSearchTagsController> logger) : base()
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
		[HttpGet("{series_search_text}")]
		public async Task<IActionResult> GetAsync(string series_search_text, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string tag_search_text)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.series_search_text = series_search_text;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderBy = ParseEnum<tags_order_by_values>(order_by);
				api.Arguments.order_by = orderBy ?? api.Arguments.order_by;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				api.Arguments.tag_names = tag_names ?? api.Arguments.tag_names;

				var tagGroupId = ParseEnum<tag_group_id_values>(tag_group_id);
				api.Arguments.tag_group_id = tagGroupId ?? api.Arguments.tag_group_id;

				api.Arguments.tag_search_text = tag_search_text ?? api.Arguments.tag_search_text;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesSearchTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}