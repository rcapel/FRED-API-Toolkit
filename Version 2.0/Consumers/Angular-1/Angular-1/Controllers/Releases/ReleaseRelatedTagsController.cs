using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Tags;
using FRED.Api.Releases.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Releases
{
	[Route("api/[controller]")]
	public class ReleaseRelatedTagsController : ControllerBase
	{
		#region fields

		private readonly IControllerCommon controllerCommon;
		private readonly IReleaseRelatedTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleaseRelatedTagsController> logger;

		#endregion

		#region constructors

		public ReleaseRelatedTagsController(
			IControllerCommon controllerCommon,
			IReleaseRelatedTags api,
			IAppSettings appSettings,
			ILogger<ReleaseRelatedTagsController> logger)
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
		[HttpGet("{id}/{tag_names}")]
		public async Task<IActionResult> GetAsync(int id, string tag_names, 
			DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_group_id, string search_text)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.release_id = id;
				api.Arguments.tag_names = tag_names;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "ReleaseRelatedTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}