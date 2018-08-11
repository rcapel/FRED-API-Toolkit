using AngularConsumer1.Core;

namespace AngularConsumer1.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleaseDates API facade.
	/// </summary>
	public class ReleaseDatesArguments : ReleaseArguments
	{
		#region properties

		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public bool include_release_dates_with_no_data { get; set; }

		internal override string UrlExtension
		{
			get { return "release/dates"; }
		}

		#endregion

	}
}
