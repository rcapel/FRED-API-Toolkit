using FRED.Api.Categories.Arguments;
using FRED.Api.Categories.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class Category : ApiBase<CategoryArguments, CategoryContainer>
	{
		#region constructors

		public Category()
		{
		}

		public Category(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryJson : ApiBase<CategoryArguments, string>
	{
		#region constructors

		public CategoryJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryXml : XmlApiFacade<CategoryArguments>
	{
		#region constructors

		public CategoryXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
