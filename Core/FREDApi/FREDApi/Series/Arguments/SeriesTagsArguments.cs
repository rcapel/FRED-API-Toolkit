using AngularConsumer1.Core;

namespace AngularConsumer1.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesTags API facade.
	/// </summary>
	public class SeriesTagsArguments : SeriesArguments
	{
		#region properties

		public FREDData.tags_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "series/tags"; }
		}

		#endregion

	}
}
