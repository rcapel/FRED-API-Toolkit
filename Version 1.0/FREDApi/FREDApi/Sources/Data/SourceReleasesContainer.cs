using FRED.API.Base.Data;
using FRED.API.Releases.Data;
using System.Collections.Generic;
using FRED.API.Base;

namespace FRED.API.Sources.Data
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
