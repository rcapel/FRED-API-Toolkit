using System;

namespace FRED.Api.Series.Data
{
	/// <summary>
	/// Provides data properties for an observation. 
	/// </summary>
	public class ObservationItem
	{
		#region properties

		public DateTime realtime_start { get; set; }
		public DateTime realtime_end { get; set; }
		public DateTime date { get; set; }
		public string value { get; set; }

		#endregion

	}
}
