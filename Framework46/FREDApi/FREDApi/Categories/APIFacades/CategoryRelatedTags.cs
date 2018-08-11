using FRED.API.Categories.Arguments;
using FRED.API.Base.APIFacades;
using FRED.API.Tags.Data;

namespace FRED.API.Categories.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryRelatedTags : ApiBase<CategoryRelatedTagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryRelatedTagsJson : ApiBase<CategoryRelatedTagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryRelatedTagsXml : XmlApiFacade<CategoryRelatedTagsArguments>
	{
	}

}
