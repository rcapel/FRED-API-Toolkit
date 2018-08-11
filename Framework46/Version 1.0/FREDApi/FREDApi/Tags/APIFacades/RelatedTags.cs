using FRED.API.Base.APIFacades;
using FRED.API.Tags.Arguments;
using FRED.API.Tags.Data;

namespace FRED.API.Tags.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class RelatedTags : ApiBase<RelatedTagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class RelatedTagsJson : ApiBase<RelatedTagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class RelatedTagsXml : XmlApiFacade<RelatedTagsArguments>
	{
	}

}

