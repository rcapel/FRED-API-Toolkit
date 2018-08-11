using AngularConsumer1.Core;

namespace AngularConsumer1.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleaseSeries API facade.
	/// </summary>
	public class ReleaseSeriesArguments : ReleaseArguments
	{
		#region properties

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
			get { return "release/series"; }
		}

		#endregion

	}
}
