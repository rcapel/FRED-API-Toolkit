namespace FRED.Api.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleaseSources API facade.
	/// </summary>
	public class ReleaseSourcesArguments : ReleaseArguments
	{
		#region properties

		internal override string UrlExtension
		{
			get { return "release/sources"; }
		}

		#endregion

	}
}
