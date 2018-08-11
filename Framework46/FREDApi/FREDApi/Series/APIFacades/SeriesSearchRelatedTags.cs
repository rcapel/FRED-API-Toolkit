using FRED.API.Series.Arguments;
using FRED.API.Base.APIFacades;
using FRED.API.Tags.Data;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class SeriesSearchRelatedTags : ApiBase<SeriesSearchRelatedTagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchRelatedTagsJson : ApiBase<SeriesSearchRelatedTagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchRelatedTagsXml : XmlApiFacade<SeriesSearchRelatedTagsArguments>
	{
	}

}
