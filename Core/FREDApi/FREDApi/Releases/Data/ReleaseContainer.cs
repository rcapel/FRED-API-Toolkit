using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Releases.Data
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
