using FRED.API.Categories.Arguments;
using FRED.API.Categories.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Categories.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class Category : ApiBase<CategoryArguments, CategoryContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryJson : ApiBase<CategoryArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryXml : XmlApiFacade<CategoryArguments>
	{
	}

}
