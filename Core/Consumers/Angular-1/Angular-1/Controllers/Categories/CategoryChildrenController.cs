using FRED.Api.Categories.ApiFacades;
using FRED.Api.Configuration.Interfaces;
using FRED.Api.Models.Categories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace FRED.Api.Controllers.Categories
{
	[Route("api/[controller]")]
	public class CategoryChildrenController : ControllerBase
	{
		#region fields

		private readonly ICategoryChildren api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategoryController> logger;

		#endregion

		#region constructors

		public CategoryChildrenController(
			ICategoryChildren api,
			IAppSettings appSettings,
			ILogger<CategoryController> logger)
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
		public async Task<IActionResult> GetAsync(int id)
		{
			CategoryResponse result = new CategoryResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.category_id = id;

				result.container = await api.FetchAsync();

				result.FetchMessage = api.FetchMessage;
				result.Url = api.Url;
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