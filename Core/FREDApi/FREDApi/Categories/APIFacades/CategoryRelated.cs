using FRED.Api.Categories.Arguments;
using FRED.Api.Categories.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/related API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class CategoryRelated : ApiBase<CategoryRelatedArguments, CategoryContainer>
	{
		#region constructors

		public CategoryRelated(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryRelatedJson : ApiBase<CategoryRelatedArguments, string>
	{
		#region constructors

		public CategoryRelatedJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryRelatedXml : XmlApiFacade<CategoryRelatedArguments>
	{
		#region constructors

		public CategoryRelatedXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
