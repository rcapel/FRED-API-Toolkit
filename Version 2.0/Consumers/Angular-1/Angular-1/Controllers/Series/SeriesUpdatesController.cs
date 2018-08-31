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
	public class SeriesUpdatesController : ControllerBase
	{
		#region fields

		private readonly IControllerCommon controllerCommon;
		private readonly ISeriesUpdates api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesUpdatesController> logger;

		#endregion

		#region constructors

		public SeriesUpdatesController(
			IControllerCommon controllerCommon,
			ISeriesUpdates api,
			IAppSettings appSettings,
			ILogger<SeriesUpdatesController> logger)
		{
			this.controllerCommon = controllerCommon;
			this.api = api;
			this.appSettings = appSettings;
			this.logger = logger;
		}

		#endregion

		#region public methods

		[Produces("application/json")]
		[ProducesResponseType(200, Type = typeof(string))]
		[ProducesResponseType(500, Type = typeof(string))]
		public async Task<IActionResult> GetAsync(DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			SeriesUpdatesResponse result = new SeriesUpdatesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesUpdates failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}