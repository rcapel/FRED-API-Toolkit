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
	public class ReleaseDatesController : ControllerBase
	{
		#region fields

		private readonly IReleaseDates api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleaseDatesController> logger;

		#endregion

		#region constructors

		public ReleaseDatesController(
			IReleaseDates api,
			IAppSettings appSettings,
			ILogger<ReleaseDatesController> logger) : base()
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
			int? limit, int? offset, string sort_order,
			bool? include_release_dates_with_no_data)
		{
			ReleaseDatesResponse result = new ReleaseDatesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.release_id = id;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var sortOrderValue = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrderValue ?? api.Arguments.sort_order;

				api.Arguments.include_release_dates_with_no_data =
					include_release_dates_with_no_data ?? api.Arguments.include_release_dates_with_no_data;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetReleaseDates failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

		#region private methods

		#endregion

	}

}