using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Categories;
using FRED.Api.Categories.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Controllers.Categories
{
	[Route("api/[controller]")]
	public class CategoryRelatedController : ControllerBase
	{
		#region fields

		private readonly IControllerCommon controllerCommon;
		private readonly ICategoryRelated api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategoryRelatedController> logger;

		#endregion

		#region constructors

		public CategoryRelatedController(
			IControllerCommon controllerCommon,
			ICategoryRelated api,
			IAppSettings appSettings,
			ILogger<CategoryRelatedController> logger)
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
		[HttpGet("{id}")]
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end)
		{
			CategoryResponse result = new CategoryResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.category_id = id;
				api.Arguments.realtime_start = realtime_start == null ? api.Arguments.realtime_start : realtime_start;
				api.Arguments.realtime_end = realtime_end == null ? api.Arguments.realtime_end : realtime_end;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategoryRelated failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}