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

		private readonly IControllerCommon controllerCommon;
		private readonly ISources api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SourcesController> logger;

		#endregion

		#region constructors

		public SourcesController(
			IControllerCommon controllerCommon,
			ISources api,
			IAppSettings appSettings,
			ILogger<SourcesController> logger)
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
		[HttpGet]
		public async Task<IActionResult> GetAsync()
		{
			SourcesResponse result = new SourcesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
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