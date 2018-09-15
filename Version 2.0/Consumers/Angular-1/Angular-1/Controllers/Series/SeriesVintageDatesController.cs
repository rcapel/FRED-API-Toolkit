using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

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
			ILogger<SeriesVintageDatesController> logger) : base()
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
			int? limit, int? offset, string sort_order)
		{
			SeriesVintageDatesResponse result = new SeriesVintageDatesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.series_id = id;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
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