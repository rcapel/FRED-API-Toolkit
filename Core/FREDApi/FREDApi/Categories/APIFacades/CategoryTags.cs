using FRED.Api.Categories.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Data;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryTags : ApiBase<CategoryTagsArguments, TagContainer>
	{
		#region constructors

		public CategoryTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryTagsJson : ApiBase<CategoryTagsArguments, string>
	{
		#region constructors

		public CategoryTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryTagsXml : XmlApiFacade<CategoryTagsArguments>
	{
		#region constructors

		public CategoryTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
