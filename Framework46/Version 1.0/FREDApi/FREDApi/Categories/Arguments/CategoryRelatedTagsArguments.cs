namespace FRED.API.Categories.Arguments
{
	/// <summary>
	/// Provides argument properties for the CategoryRelatedTags API facade.
	/// </summary>
	public class CategoryRelatedTagsArguments : CategoryTagsArguments
	{
		#region properties

		public string exclude_tag_names { get; set; }

		internal override string UrlExtension
		{
			get { return "category/related_tags"; }
		}

		#endregion

	}
}
