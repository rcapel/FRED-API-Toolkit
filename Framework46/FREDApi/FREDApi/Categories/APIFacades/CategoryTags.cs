using FRED.API.Categories.Arguments;
using FRED.API.Base.APIFacades;
using FRED.API.Tags.Data;

namespace FRED.API.Categories.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryTags : ApiBase<CategoryTagsArguments, TagContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryTagsJson : ApiBase<CategoryTagsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryTagsXml : XmlApiFacade<CategoryTagsArguments>
	{
	}

}
