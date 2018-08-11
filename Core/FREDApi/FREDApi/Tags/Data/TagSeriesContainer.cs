using AngularConsumer1.Core.Data;
using AngularConsumer1.Series.Data;
using System.Collections.Generic;
using AngularConsumer1.Core;

namespace AngularConsumer1.Tags.Data
{
	/// <summary>
	/// Provides data properties for a tag series container, including a collection of tag series (seriess). 
	/// </summary>
	public class TagSeriesContainer : ExtendedContainer<FREDData.series_order_by_values>
	{
		#region properties

		public List<SeriesItem> seriess { get; set; }

		#endregion

	}
}
