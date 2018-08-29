using FRED.Api.Sources.Data;

namespace FRED.Api.Releases.Data
{
	/// <summary>
	/// Provides data properties for a release. 
	/// </summary>
	public partial class ReleaseItem : SourceItem
	{
		#region properties

		public bool press_release { get; set; }

		#endregion

	}
}
