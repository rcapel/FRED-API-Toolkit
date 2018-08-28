using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
using FRED.Api.Tags.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Tags
{
	[Route("api/[controller]")]
	public class TagsController : ControllerBase
	{
		#region fields

		private readonly ITags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<TagsController> logger;

		#endregion

		#region constructors

		public TagsController(
			ITags api,
			IAppSettings appSettings,
			ILogger<TagsController> logger)
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
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}