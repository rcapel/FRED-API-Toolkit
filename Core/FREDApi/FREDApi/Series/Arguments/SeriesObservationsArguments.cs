using AngularConsumer1.Core;
using System;

namespace AngularConsumer1.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesObservations API facade.
	/// </summary>
	public class SeriesObservationsArguments : SeriesArguments
	{
		#region properties

		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public DateTime? observation_start { get; set; }
		public DateTime? observation_end { get; set; }
		public FREDData.units_values units { get; set; }
		public FREDData.frequency_values frequency { get; set; }
		public FREDData.aggregation_method_values aggregation_method { get; set; }
		public FREDData.output_type_values output_type { get; set; }
		public string vintage_dates { get; set; }

		internal override string UrlExtension

		{
			get { return "series/observations"; }
		}

		#endregion
	}
}
