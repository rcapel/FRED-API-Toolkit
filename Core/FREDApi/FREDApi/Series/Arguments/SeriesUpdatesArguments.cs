using FRED.Api.Core;
using FRED.Api.Core.Arguments;
using System;

namespace FRED.Api.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesUpdates API facade.
	/// </summary>
	public class SeriesUpdatesArguments : ArgumentsBase
	{
		#region properties

		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.filter_value_values filter_value { get; set; }

		internal override string UrlExtension

		{
			get { return "series/updates"; }
		}

		#endregion
	}
}
