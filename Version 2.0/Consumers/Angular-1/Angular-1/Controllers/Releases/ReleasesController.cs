using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Releases;
using FRED.Api.Releases.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Releases
{
	[Route("api/[controller]")]
	public class ReleasesController : ControllerBase
	{
		#region fields

		private readonly IControllerCommon controllerCommon;
		private readonly IReleases api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<ReleasesController> logger;

		#endregion

		#region constructors

		public ReleasesController(
			IControllerCommon controllerCommon,
			IReleases api,
			IAppSettings appSettings,
			ILogger<ReleasesController> logger)
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
		public async Task<IActionResult> GetAsync(DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string tag_names, string tag_group_id, string search_text)
		{
			ReleasesResponse result = new ReleasesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				//api.Arguments.realtime_start = realtime_start == null ? api.Arguments.realtime_start : realtime_start;
				//api.Arguments.realtime_end = realtime_end == null ? api.Arguments.realtime_end : realtime_end;
				//api.Arguments.limit = limit == null ? api.Arguments.limit : limit;
				//api.Arguments.offset = offset == null ? api.Arguments.offset : offset;
				//if (order_by != null)
				//{
				//	tags_order_by_values orderBy = 0;
				//	if (Enum.TryParse<tags_order_by_values>(order_by, out orderBy))
				//	{
				//		api.Arguments.order_by = orderBy;
				//	}
				//}
				//if (sort_order != null)
				//{
				//	sort_order_values sortOrder = 0;
				//	if (Enum.TryParse<sort_order_values>(sort_order, out sortOrder))
				//	{
				//		api.Arguments.sort_order = sortOrder;
				//	}
				//}
				//api.Arguments.tag_names = tag_names == null ? api.Arguments.tag_names : tag_names;
				//if (tag_group_id != null)
				//{
				//	tag_group_id_values tagGroupId = 0;
				//	if (Enum.TryParse<tag_group_id_values>(tag_group_id, out tagGroupId))
				//	{
				//		api.Arguments.tag_group_id = tagGroupId;
				//	}
				//}
				//api.Arguments.search_text = search_text == null ? api.Arguments.search_text : search_text;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetReleases failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}