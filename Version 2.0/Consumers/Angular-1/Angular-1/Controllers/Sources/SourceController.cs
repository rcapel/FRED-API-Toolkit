using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Sources;
using FRED.Api.Sources.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Sources
{
	[Route("api/[controller]")]
	public class SourceController : ControllerBase
	{
		#region fields

		private readonly ISource api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SourceController> logger;

		#endregion

		#region constructors

		public SourceController(
			ISource api,
			IAppSettings appSettings,
			ILogger<SourceController> logger) : base()
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
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			SourceResponse result = new SourceResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.source_id = id;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSource failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}