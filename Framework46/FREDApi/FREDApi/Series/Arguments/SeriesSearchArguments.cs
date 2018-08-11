using FRED.API.Base;
using FRED.API.Base.Arguments;
using System;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesSearch API facade.
	/// </summary>
	public class SeriesSearchArguments : ArgumentsBase
	{
		#region properties

		public string search_text { get; set; }
		public FREDData.search_type_values search_type { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.series_search_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public FREDData.filter_variable_values filter_variable { get; set; }
		public string filter_value { get; set; }
		public string tag_names { get; set; }
		public string exclude_tag_names { get; set; }

		internal override string UrlExtension
		{
			get { return "series/search"; }
		}

		#endregion

	}
}
