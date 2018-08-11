using AngularConsumer1.Core;
using AngularConsumer1.Core.Arguments;
using System;

namespace AngularConsumer1.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleasesDates API facade.
	/// </summary>
	public class ReleasesDatesArguments : ArgumentsBase
	{
		#region properties

		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.releases_dates_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public bool include_release_dates_with_no_data { get; set; }

		internal override string UrlExtension
		{
			get { return "releases/dates"; }
		}

		#endregion

	}
}
