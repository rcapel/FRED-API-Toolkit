using FRED.Api.Core;

namespace FRED.Api.Sources.Arguments
{
	/// <summary>
	/// Provides argument properties for the SourceReleases API facade.
	/// </summary>
	public class SourceReleasesArguments : SourceArguments
	{
		#region properties

		public int? limit { get; set; }
		public int? offset { get; set; }
		public FREDData.releases_order_by_values order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }

		internal override string UrlExtension
		{
			get { return "source/releases"; }
		}

		#endregion

	}
}
