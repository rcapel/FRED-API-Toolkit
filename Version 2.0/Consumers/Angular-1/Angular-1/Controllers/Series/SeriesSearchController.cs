using AngularConsumer1.Configuration.Interfaces;
using AngularConsumer1.Models.Series;
using FRED.Api.Series.ApiFacades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static FRED.Api.Core.FREDData;

namespace AngularConsumer1.Controllers.Series
{
	[Route("api/[controller]")]
	public class SeriesSearchController : ControllerBase
	{
		#region fields

		private readonly ISeriesSearch api;
		private readonly IAppSettings appSettings;
		private readonly ILogger<SeriesSearchController> logger;

		#endregion

		#region constructors

		public SeriesSearchController(
			ISeriesSearch api,
			IAppSettings appSettings,
			ILogger<SeriesSearchController> logger) : base()
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
		[HttpGet("{search_text}")]
		public async Task<IActionResult> GetAsync(string search_text, string search_type,
			DateTime? realtime_start, DateTime? realtime_end,
			int? limit, int? offset, string order_by, string sort_order,
			string filter_variable, string filter_value, string tag_names, string exclude_tag_names)
		{
			SeriesSearchResponse result = new SeriesSearchResponse();

			try
			{
				api.Arguments.ApiKey = appSettings.ApiKey;
				api.Arguments.search_text = search_text;

				var searchType = ParseEnum<search_type_values>(search_type);
				api.Arguments.search_type = searchType ?? api.Arguments.search_type;

				api.Arguments.realtime_start = realtime_start ?? api.Arguments.realtime_start;
				api.Arguments.realtime_end = realtime_end ?? api.Arguments.realtime_end;
				api.Arguments.limit = limit ?? api.Arguments.limit;
				api.Arguments.offset = offset ?? api.Arguments.offset;

				var orderBy = ParseEnum<series_search_order_by_values>(order_by);
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
				logger.LogError(exception, "GetSeriesSearch failed");
				return StatusCode(500);
			}

			return Ok(result);
		}

		#endregion

	}

}