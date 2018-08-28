using FRED.API.Base.APIFacades;
using FRED.API.Tags.Arguments;
using FRED.API.Tags.Data;

namespace FRED.API.Tags.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned in a TagSeriesContainer instance.
	/// </summary>
	public class TagsSeries : ApiBase<TagsSeriesArguments, TagSeriesContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class TagsSeriesJson : ApiBase<TagsSeriesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class TagsSeriesXml : XmlApiFacade<TagsSeriesArguments>
	{
	}

}

