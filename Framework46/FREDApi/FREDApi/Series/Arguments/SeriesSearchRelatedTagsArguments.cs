namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesSearchRelatedTags API facade.
	/// </summary>
	public class SeriesSearchRelatedTagsArguments : SeriesSearchTagsArguments
	{
		#region properties

		public string exclude_tag_names { get; set; }

		internal override string UrlExtension
		{
			get { return "series/search/related_tags"; }
		}

		#endregion

	}
}
