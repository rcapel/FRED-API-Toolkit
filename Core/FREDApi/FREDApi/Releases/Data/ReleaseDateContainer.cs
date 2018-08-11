using AngularConsumer1.Core;
using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Releases.Data
{
	/// <summary>
	/// Provides data properties for a release date container, including a collection of release dates. 
	/// </summary>
	public class ReleaseDateContainer : ExtendedContainer<FREDData.releases_dates_order_by_values>
	{
		#region properties

		public List<DateItem> release_dates { get; set; }

		#endregion

	}
}
