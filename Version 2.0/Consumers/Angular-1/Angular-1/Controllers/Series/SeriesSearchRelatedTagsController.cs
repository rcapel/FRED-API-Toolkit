using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Series
{
	[Route("api/[controller]")]
	public class SeriesSearchRelatedTagsController : ControllerBase
	{
		#region fields

		private readonly ISeriesSearchRelatedTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesSearchRelatedTagsController> logger;

		#endregion

		#region constructors

		public SeriesSearchRelatedTagsController(
			ISeriesSearchRelatedTags api,
			IAppSettings appSettings,
			ILogger<SeriesSearchRelatedTagsController> logger) : base()
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
		[HttpGet("{series_search_text}/{tag_names}")]
		public async Task<IActionResult> GetAsync(string series_search_text, string tag_names,
			DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_group_id)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.series_search_text = series_search_text;
				api.Arguments.tag_names = tag_names;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesSearchRelatedTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}