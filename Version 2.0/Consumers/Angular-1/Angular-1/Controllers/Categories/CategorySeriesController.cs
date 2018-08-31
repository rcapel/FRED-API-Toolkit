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

		private readonly IControllerCommon controllerCommon;
		private readonly ICategorySeries api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<CategorySeriesController> logger;

		#endregion

		#region constructors

		public CategorySeriesController(
			IControllerCommon controllerCommon,
			ICategorySeries api,
			IAppSettings appSettings,
			ILogger<CategorySeriesController> logger)
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
		public async Task<IActionResult> GetAsync(int id, DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string filter_variable, string filter_value, string tag_names, string exclude_tag_names)
		{
			SeriesResponse result = new SeriesResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.category_id = id;
				api.Arguments.realtime_start = realtime_start == null ? api.Arguments.realtime_start : realtime_start;
				api.Arguments.realtime_end = realtime_end == null ? api.Arguments.realtime_end : realtime_end;
				api.Arguments.limit = limit == null ? api.Arguments.limit : limit;
				api.Arguments.offset = offset == null ? api.Arguments.offset : offset;
				if (order_by != null)
				{
					series_order_by_values orderBy = 0;
					if (Enum.TryParse<series_order_by_values>(order_by, out orderBy))
					{
						api.Arguments.order_by = orderBy;
					}
				}
				if (sort_order != null)
				{
					sort_order_values sortOrder = 0;
					if (Enum.TryParse<sort_order_values>(sort_order, out sortOrder))
					{
						api.Arguments.sort_order = sortOrder;
					}
				}
				if (filter_variable != null)
				{
					filter_variable_values filterVariable = 0;
					if (Enum.TryParse<filter_variable_values>(filter_variable, out filterVariable))
					{
						api.Arguments.filter_variable = filterVariable;
					}
				}
				if (filter_value != null)
				{
					filter_value_values filterValue = 0;
					if (Enum.TryParse<filter_value_values>(filter_value, out filterValue))
					{
						api.Arguments.filter_value = filterValue;
					}
				}
				api.Arguments.tag_names = tag_names == null ? api.Arguments.tag_names : tag_names;
				api.Arguments.exclude_tag_names = exclude_tag_names == null ? api.Arguments.exclude_tag_names : exclude_tag_names;

				result.container = await api.FetchAsync();

				controllerCommon.SetApiValues(api, api.Arguments.ValidationErrors, result);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "GetCategorySeries failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

		#region private methods

		//private Tuple<bool, T> ParseEnum<T>(string enumString)
		//{
		//	Tuple<bool, string> result = null;

		//	if (enumString != null)
		//	{
		//		T result = 0;
		//		if (Enum.TryParse<sort_order_values>(enumString, out result))
		//		{
		//			api.Arguments.sort_order = result;
		//		}
		//	}
		//}

		#endregion

	}

}