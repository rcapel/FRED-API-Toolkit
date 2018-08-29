using FRED.Api.Tags.Arguments;

namespace FRED.Api.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the ReleaseRelatedTags API facade.
	/// </summary>
	public class ReleaseRelatedTagsArguments : RelatedTagsArguments
	{
		#region properties

		public int release_id { get; set; }

		internal override string UrlExtension
		{
			get { return "release/related_tags"; }
		}

		#endregion

	}
}
