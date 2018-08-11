using FRED.API.Base;
using FRED.API.Base.Arguments;
using System;

namespace FRED.API.Categories.Arguments
{
	/// <summary>
	/// Provides argument properties for the CategorySeries API facade.
	/// </summary>
	public class CategorySeriesArguments : ArgumentsBase
	{
		#region properties

		public int category_id { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.series_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public FREDData.filter_variable_values filter_variable { get; set; }
		public string filter_value { get; set; }
		public string tag_names { get; set; }
		public string exclude_tag_names { get; set; }

		internal override string UrlExtension
		{
			get { return "category/series"; }
		}

		#endregion

	}
}
