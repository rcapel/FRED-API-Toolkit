using FRED.API.Base;
using FRED.API.Base.Data;
using System.Collections.Generic;

namespace FRED.API.Series.Data
{
	/// <summary>
	/// Provides data properties for a series container, including a collection of series (seriess). 
	/// </summary>
	public class SeriesContainer : ExtendedContainer<FREDData.series_order_by_values>
	{
		#region properties

		public List<SeriesItem> seriess { get; set; }

		#endregion

	}
}
