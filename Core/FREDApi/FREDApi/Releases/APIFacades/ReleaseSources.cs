using FRED.Api.Releases.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/sources API endpoint. Results are returned in a SourceContainer instance.
	/// </summary>
	public class ReleaseSources : ApiBase0<ReleaseSourcesArguments, SourceContainer>
	{
		#region constructors

		public ReleaseSources(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/sources API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseSourcesJson : ApiBase0<ReleaseSourcesArguments, string>
	{
		#region constructors

		public ReleaseSourcesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/sources API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseSourcesXml : XmlApiFacade<ReleaseSourcesArguments>
	{
		#region constructors

		public ReleaseSourcesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
