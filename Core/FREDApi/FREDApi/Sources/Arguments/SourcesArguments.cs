using AngularConsumer1.Core;
using AngularConsumer1.Core.Arguments;
using System;

namespace AngularConsumer1.Sources.Arguments
{
	/// <summary>
	/// Provides argument properties for the Sources API facade.
	/// </summary>
	public class SourcesArguments : ArgumentsBase
	{
		#region properties

		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }
		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.sources_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "sources"; }
		}

		#endregion

	}
}
