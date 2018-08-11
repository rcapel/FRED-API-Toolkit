using FRED.Api.Core.Data;
using System.Collections.Generic;

namespace FRED.Api.Releases.Data
{
	/// <summary>
	/// Provides data properties for a release container, including a collection of releases. 
	/// </summary>
	public class ReleaseContainer : Container
	{
		#region properties

		public List<ReleaseItem> releases { get; set; }

		#endregion

	}
}
