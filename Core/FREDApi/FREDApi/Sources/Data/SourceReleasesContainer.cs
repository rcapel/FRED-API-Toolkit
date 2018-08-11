using FRED.Api.Core.Data;
using FRED.Api.Releases.Data;
using System.Collections.Generic;
using FRED.Api.Core;

namespace FRED.Api.Sources.Data
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
