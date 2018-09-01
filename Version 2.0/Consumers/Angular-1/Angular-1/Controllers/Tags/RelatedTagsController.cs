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
	public class RelatedTagsController : ControllerBase
	{
		#region fields

		private readonly IRelatedTags api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<RelatedTagsController> logger;

		#endregion

		#region constructors

		public RelatedTagsController(
			IRelatedTags api,
			IAppSettings appSettings,
			ILogger<RelatedTagsController> logger) : base()
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
		[HttpGet("{tag_names}")]
		public async Task<IActionResult> GetAsync(string tag_names, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_group_id, string search_text)
		{
			TagsResponse result = new TagsResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.tag_names = tag_names;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetRelatedTags failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}