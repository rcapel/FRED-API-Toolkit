using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Series
{
	[Route("api/[controller]")]
	public class SeriesVintageDatesController : ControllerBase
	{
		#region fields

		private readonly ISeriesVintageDates api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesVintageDatesController> logger;

		#endregion

		#region constructors

		public SeriesVintageDatesController(
			ISeriesVintageDates api,
			IAppSettings appSettings,
			ILogger<SeriesVintageDatesController> logger)
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
		public async Task<IActionResult> GetAsync(string id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			SeriesVintageDatesResponse result = new SeriesVintageDatesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.series_id = id;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesVintageDates failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}