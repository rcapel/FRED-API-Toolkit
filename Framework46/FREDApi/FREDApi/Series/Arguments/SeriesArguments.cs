using FRED.API.Base.Arguments;
using System;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the Series API facade.
	/// </summary>
	public class SeriesArguments : ArgumentsBase
	{
		#region properties

		public string series_id { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }

		internal override string UrlExtension
		{
			get { return "series"; }
		}

		#endregion

	}
}
