using FRED.API.Base.Data;
using FRED.API.Series.Data;
using System.Collections.Generic;
using FRED.API.Base;

namespace FRED.API.Tags.Data
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
