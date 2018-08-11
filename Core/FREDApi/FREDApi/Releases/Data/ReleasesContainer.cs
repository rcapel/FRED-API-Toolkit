using AngularConsumer1.Core;
using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Releases.Data
{
	/// <summary>
	/// Provides data properties for a releases container, including a collection of releases. 
	/// </summary>
	public class ReleasesContainer : ExtendedContainer<FREDData.releases_order_by_values>
	{
		#region properties

		public List<ReleaseItem> releases { get; set; }

		#endregion

	}
}
