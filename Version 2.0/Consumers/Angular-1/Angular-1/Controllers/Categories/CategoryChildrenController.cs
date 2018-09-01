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
	public class CategoryChildrenController : ControllerBase
	{
		#region fields

		private readonly ICategoryChildren api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategoryChildrenController> logger;

		#endregion

		#region constructors

		public CategoryChildrenController(
			ICategoryChildren api,
			IAppSettings appSettings,
			ILogger<CategoryChildrenController> logger) : base()
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

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategoryChildren failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}