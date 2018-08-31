using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Releases.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Releases
{
	[Route("api/[controller]")]
	public class ReleaseSeriesController : ControllerBase
	{
		#region fields

		private readonly IControllerCommon controllerCommon;
		private readonly IReleaseSeries api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleaseSeriesController> logger;

		#endregion

		#region constructors

		public ReleaseSeriesController(
			IControllerCommon controllerCommon,
			IReleaseSeries api,
			IAppSettings appSettings,
			ILogger<ReleaseSeriesController> logger)
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
		[HttpGet("{id}")]
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			SeriesResponse result = new SeriesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.release_id = id;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetReleaseSeries failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}