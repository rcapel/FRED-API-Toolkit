using FRED.Api.Core.Arguments;
using System;

namespace FRED.Api.Series.Arguments
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
