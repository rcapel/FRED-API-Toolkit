using FRED.Api.Core.Data;
using System.Collections.Generic;

namespace FRED.Api.Sources.Data
{
	/// <summary>
	/// Provides data properties for a source container, including a collection of sources. 
	/// </summary>
	public class SourceContainer : Container
	{
		#region properties

		public List<SourceItem> sources { get; set; }

		#endregion

	}
}
