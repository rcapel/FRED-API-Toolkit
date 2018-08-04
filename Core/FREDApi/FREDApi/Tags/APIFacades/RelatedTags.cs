using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Arguments;
using FRED.Api.Tags.Data;

namespace FRED.Api.Tags.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class RelatedTags : ApiBase<RelatedTagsArguments, TagContainer>
	{
		#region constructors

		public RelatedTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class RelatedTagsJson : ApiBase<RelatedTagsArguments, string>
	{
		#region constructors

		public RelatedTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class RelatedTagsXml : XmlApiFacade<RelatedTagsArguments>
	{
		#region constructors

		public RelatedTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}

