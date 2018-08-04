namespace FRED.Api.Tags.Arguments
{
	/// <summary>
	/// Provides argument properties for the RelatedTags API facade.
	/// </summary>
	public class RelatedTagsArguments : TagsArguments
	{
		#region properties

		public string exclude_tag_names { get; set; }

		internal override string UrlExtension
		{
			get { return "related_tags"; }
		}

		#endregion

	}
}
