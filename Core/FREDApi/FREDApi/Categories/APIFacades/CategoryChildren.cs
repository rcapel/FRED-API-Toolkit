using FRED.Api.Categories.Arguments;
using FRED.Api.Categories.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class CategoryChildren : ApiBase<CategoryChildrenArguments, CategoryContainer>
	{
		#region constructors

		public CategoryChildren(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryChildrenJson : ApiBase<CategoryChildrenArguments, string>
	{
		#region constructors

		public CategoryChildrenJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/children API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryChildrenXml : XmlApiFacade<CategoryChildrenArguments>
	{
		#region constructors

		public CategoryChildrenXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
