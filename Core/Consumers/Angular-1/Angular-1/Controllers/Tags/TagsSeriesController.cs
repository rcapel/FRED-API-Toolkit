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
	public class TagsSeriesController : ControllerBase
	{
		#region fields

		private readonly ITagsSeries api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<TagsSeriesController> logger;

		#endregion

		#region constructors

		public TagsSeriesController(
			ITagsSeries api,
			IAppSettings appSettings,
			ILogger<TagsSeriesController> logger)
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
		public async Task<IActionResult> GetAsync(string id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			TagsSeriesResponse result = new TagsSeriesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.tag_names = id;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetTagsSeries failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}