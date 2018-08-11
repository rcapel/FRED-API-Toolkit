using FRED.API.Base;
using FRED.API.Base.Arguments;
using System;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesSearchTags API facade.
	/// </summary>
	public class SeriesSearchTagsArguments : ArgumentsBase
	{
		#region properties

		public string series_search_text { get; set; }
		public string tag_search_text { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public string tag_names { get; set; }
		public FREDData.tag_group_id_values tag_group_id { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.tags_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "series/search/tags"; }
		}

		#endregion

	}
}
