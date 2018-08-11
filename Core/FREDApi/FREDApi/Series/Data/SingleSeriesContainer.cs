using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Series.Data
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
