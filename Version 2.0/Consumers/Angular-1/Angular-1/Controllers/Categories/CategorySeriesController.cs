using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Categories.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Categories
{
	[Route("api/[controller]")]
	public class CategorySeriesController : ControllerBase
	{
		#region fields

		private readonly ICategorySeries api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategorySeriesController> logger;

		#endregion

		#region constructors

		public CategorySeriesController(
			ICategorySeries api,
			IAppSettings appSettings,
			ILogger<CategorySeriesController> logger) : base()
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
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string filter_variable, string filter_value, string tag_names, string exclude_tag_names)
		{
			SeriesResponse result = new SeriesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.category_id = id;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderBy = ParseEnum<series_order_by_values>(order_by);
				api.Arguments.order_by = orderBy ?? api.Arguments.order_by;

				var sortOrder = ParseEnum<sort_order_values>(sort_order);
				api.Arguments.sort_order = sortOrder ?? api.Arguments.sort_order;

				var filterVariable = ParseEnum<filter_variable_values>(filter_variable);
				api.Arguments.filter_variable = filterVariable ?? api.Arguments.filter_variable;

				api.Arguments.filter_value = filter_value ?? api.Arguments.filter_value;
				api.Arguments.tag_names = tag_names ?? api.Arguments.tag_names;
				api.Arguments.exclude_tag_names = exclude_tag_names ?? api.Arguments.exclude_tag_names;

				result.container = await api.FetchAsync();

				SetApiValues(api, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategorySeries failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}