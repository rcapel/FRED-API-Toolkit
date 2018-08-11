using FRED.Api.Core.Data;
using FRED.Api.Series.Data;
using System.Collections.Generic;
using FRED.Api.Core;

namespace FRED.Api.Tags.Data
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
