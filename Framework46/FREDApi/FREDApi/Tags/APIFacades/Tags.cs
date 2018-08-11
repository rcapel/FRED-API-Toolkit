using FRED.API.Base.APIFacades;
using FRED.API.Tags.Arguments;
using FRED.API.Tags.Data;

namespace FRED.API.Tags.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class Tags : ApiBase<TagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class TagsJson : ApiBase<TagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class TagsXml : XmlApiFacade<TagsArguments>
	{
	}

}

