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
	public class SourceReleasesController : ControllerBase
	{
		#region fields

		private readonly ISourceReleases api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SourceReleasesController> logger;

		#endregion

		#region constructors

		public SourceReleasesController(
			ISourceReleases api,
			IAppSettings appSettings,
			ILogger<SourceReleasesController> logger)
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
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			SourceReleasesResponse result = new SourceReleasesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.source_id = id;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSourceReleases failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}