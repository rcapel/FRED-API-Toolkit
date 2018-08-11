using FRED.API.Base.Data;
using System.Collections.Generic;

namespace FRED.API.Series.Data
{
	/// <summary>
	/// Provides data properties for a single series container, including a collection (seriess) containing a single series. 
	/// </summary>
	public class SingleSeriesContainer : Container
	{
		#region properties

		public List<SeriesItem> seriess { get; set; }

		#endregion

	}
}
