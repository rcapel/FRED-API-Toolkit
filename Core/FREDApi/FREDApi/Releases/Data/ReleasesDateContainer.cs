using AngularConsumer1.Core;
using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Releases.Data
{
	/// <summary>
	/// Provides data properties for a releases date container, including a collection of releases dates. 
	/// </summary>
	public class ReleasesDateContainer : ExtendedContainer<FREDData.releases_dates_order_by_values>
	{
		#region properties

		public List<ReleasesDateItem> release_dates { get; set; }

		#endregion

	}
}
