using FRED.API.Base;
using FRED.API.Base.Data;
using System.Collections.Generic;

namespace FRED.API.Sources.Data
{
	/// <summary>
	/// Provides data properties for a sources container, including a collection of sources. 
	/// </summary>
	public class SourcesContainer : ExtendedContainer<FREDData.sources_order_by_values>
	{
		#region properties

		public List<SourceItem> sources { get; set; }

		#endregion

	}
}
