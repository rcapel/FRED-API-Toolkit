using FRED.API.Series.Arguments;
using FRED.API.Base.APIFacades;
using FRED.API.Tags.Data;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class SeriesSearchTags : ApiBase<SeriesSearchTagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchTagsJson : ApiBase<SeriesSearchTagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchTagsXml : XmlApiFacade<SeriesSearchTagsArguments>
	{
	}

}
