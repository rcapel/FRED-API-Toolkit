using FRED.Api.Releases.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class ReleaseRelatedTags : ApiBase0<ReleaseRelatedTagsArguments, TagContainer>
	{
		#region constructors

		public ReleaseRelatedTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseRelatedTagsJson : ApiBase0<ReleaseRelatedTagsArguments, string>
	{
		#region constructors

		public ReleaseRelatedTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseRelatedTagsXml : XmlApiFacade<ReleaseRelatedTagsArguments>
	{
		#region constructors

		public ReleaseRelatedTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
