using FRED.Api.Core;
using FRED.Api.Core.Data;
using System.Collections.Generic;

namespace FRED.Api.Series.Data
{
	/// <summary>
	/// Provides data properties for a series search container, including a collection of series (seriess). 
	/// </summary>
	public class SeriesSearchContainer : ExtendedContainer<FREDData.series_search_order_by_values>
	{
		#region properties

		public List<SeriesItem> seriess { get; set; }

		#endregion

	}
}
