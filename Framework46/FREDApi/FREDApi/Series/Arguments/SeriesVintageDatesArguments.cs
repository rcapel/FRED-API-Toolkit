using FRED.API.Base;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesVintageDates API facade.
	/// </summary>
	public class SeriesVintageDatesArguments : SeriesArguments
	{
		#region properties

		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "series/vintagedates"; }
		}

		#endregion

	}
}
