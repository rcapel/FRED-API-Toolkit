using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Releases;
using FRED.Api.Releases.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Releases
{
	[Route("api/[controller]")]
	public class ReleasesDatesController : ControllerBase
	{
		#region fields

		private readonly IReleasesDates api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleasesDatesController> logger;

		#endregion

		#region constructors

		public ReleasesDatesController(
			IReleasesDates api,
			IAppSettings appSettings,
			ILogger<ReleasesDatesController> logger)
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
		[HttpGet]
		public async Task<IActionResult> GetAsync(DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			bool? include_release_dates_with_no_data)
		{
			ReleasesDatesResponse result = new ReleasesDatesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderBy = ParseEnum<releases_dates_order_by_values>(order_by);
				api.Arguments.order_by = orderBy ?? api.Arguments.order_by;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				api.Arguments.include_release_dates_with_no_data =
					include_release_dates_with_no_data ?? api.Arguments.include_release_dates_with_no_data;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetReleasesDates failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}