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
	public class SeriesSearchController : ControllerBase
	{
		#region fields

		private readonly ISeriesSearch api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesSearchController> logger;

		#endregion

		#region constructors

		public SeriesSearchController(
			ISeriesSearch api,
			IAppSettings appSettings,
			ILogger<SeriesSearchController> logger) : base()
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
			SeriesSearchResponse result = new SeriesSearchResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.search_text = id;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesSearch failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}