using FRED.Api.Categories.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Data;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryRelatedTags : ApiBase<CategoryRelatedTagsArguments, TagContainer>
	{
		#region constructors

		public CategoryRelatedTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategoryRelatedTagsJson : ApiBase<CategoryRelatedTagsArguments, string>
	{
		#region constructors

		public CategoryRelatedTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategoryRelatedTagsXml : XmlApiFacade<CategoryRelatedTagsArguments>
	{
		#region constructors

		public CategoryRelatedTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
