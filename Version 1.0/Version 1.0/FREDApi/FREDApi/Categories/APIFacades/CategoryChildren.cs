using FRED.API.Categories.Arguments;
using FRED.API.Categories.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Categories.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class CategoryChildren : ApiBase<CategoryChildrenArguments, CategoryContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryChildrenJson : ApiBase<CategoryChildrenArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryChildrenXml : XmlApiFacade<CategoryChildrenArguments>
	{
	}

}
