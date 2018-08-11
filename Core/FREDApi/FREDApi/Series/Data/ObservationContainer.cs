using AngularConsumer1.Core;
using AngularConsumer1.Core.Data;
using System;
using System.Collections.Generic;

namespace AngularConsumer1.Series.Data
{
	/// <summary>
	/// Provides data properties for an observation container, including a collection of observations. 
	/// </summary>
	public class ObservationContainer : ExtendedContainer<FREDData.observation_order_by_values>
	{
		#region properties

		public DateTime observation_start { get; set; }
		public DateTime observation_end { get; set; }
		public FREDData.units_values units { get; set; }
		public int output_type { get; set; }
		public string file_type { get; set; }

		public List<ObservationItem> observations { get; set; }

		#endregion

	}
}
