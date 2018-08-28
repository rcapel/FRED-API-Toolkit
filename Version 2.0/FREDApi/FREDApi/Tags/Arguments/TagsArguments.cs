using FRED.Api.Core;
using FRED.Api.Core.Arguments;
using System;

namespace FRED.Api.Tags.Arguments
{
	/// <summary>
	/// Provides argument properties for the Tags API facade.
	/// </summary>
	public class TagsArguments : ArgumentsBase
	{
		#region properties

		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public string tag_names { get; set; }
		public FREDData.tag_group_id_values tag_group_id { get; set; }
		public string search_text { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.tags_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "tags"; }
		}

		#endregion

	}
}
