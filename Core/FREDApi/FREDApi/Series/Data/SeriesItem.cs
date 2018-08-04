using System;

namespace FRED.Api.Series.Data
{
	/// <summary>
	/// Provides data properties for a series. 
	/// </summary>
	public partial class SeriesItem
	{
		#region properties

		public string id { get; set; }
		public DateTime realtime_start { get; set; }
		public DateTime realtime_end { get; set; }
		public string title { get; set; }
		public DateTime observation_start { get; set; }
		public DateTime observation_end { get; set; }
		public string frequency { get; set; }
		public string frequency_short { get; set; }
		public string units { get; set; }
		public string units_short { get; set; }
		public string seasonal_adjustment { get; set; }
		public string seasonal_adjustment_short { get; set; }
		public DateTime last_updated { get; set; }
		public int popularity { get; set; }
		public string notes { get; set; }

		#endregion

	}
}
