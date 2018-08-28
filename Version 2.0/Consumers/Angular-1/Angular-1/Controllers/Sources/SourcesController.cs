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
	public class SourcesController : ControllerBase
	{
		#region fields

		private readonly ISources api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SourcesController> logger;

		#endregion

		#region constructors

		public SourcesController(
			ISources api,
			IAppSettings appSettings,
			ILogger<SourcesController> logger)
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
		public async Task<IActionResult> GetAsync()
		{
			SourcesResponse result = new SourcesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetSources failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}