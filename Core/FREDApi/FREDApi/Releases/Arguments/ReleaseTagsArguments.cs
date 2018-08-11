using FRED.Api.Tags.Arguments;

namespace FRED.Api.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleaseTags API facade.
	/// </summary>
	public class ReleaseTagsArguments : TagsArguments
	{
		#region properties

		public int release_id { get; set; }

		internal override string UrlExtension
		{
			get { return "release/tags"; }
		}

		#endregion

	}
}
