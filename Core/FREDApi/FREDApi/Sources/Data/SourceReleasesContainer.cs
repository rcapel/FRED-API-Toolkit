using AngularConsumer1.Core.Data;
using AngularConsumer1.Releases.Data;
using System.Collections.Generic;
using AngularConsumer1.Core;

namespace AngularConsumer1.Sources.Data
{
	/// <summary>
	/// Provides data properties for a source releases container, including a collection of source releases. 
	/// </summary>
	public class SourceReleasesContainer : ExtendedContainer<FREDData.releases_order_by_values>
	{
		#region properties

		public List<ReleaseItem> releases { get; set; }

		#endregion

	}
}
