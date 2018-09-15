using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Categories;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Series
{
	[Route("api/[controller]")]
	public class SeriesCategoriesController : ControllerBase
	{
		#region fields

		private readonly ISeriesCategories api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesCategoriesController> logger;

		#endregion

		#region constructors

		public SeriesCategoriesController(
			ISeriesCategories api,
			IAppSettings appSettings,
			ILogger<SeriesCategoriesController> logger) : base()
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
		public async Task<IActionResult> GetAsync(string id, DateTime? realtime_start, DateTime? realtime_end)
		{
			CategoryResponse result = new CategoryResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.series_id = id;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSeriesCategories failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}