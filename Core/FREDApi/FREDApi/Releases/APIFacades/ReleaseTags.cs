using FRED.Api.Releases.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class ReleaseTags : ApiBase0<ReleaseTagsArguments, TagContainer>
	{
		#region constructors

		public ReleaseTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseTagsJson : ApiBase0<ReleaseTagsArguments, string>
	{
		#region constructors

		public ReleaseTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseTagsXml : XmlApiFacade<ReleaseTagsArguments>
	{
		#region constructors

		public ReleaseTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
