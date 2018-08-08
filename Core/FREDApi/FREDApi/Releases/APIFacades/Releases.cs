using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/releases API endpoint. Results are returned in a ReleasesContainer instance.
	/// </summary>
	public class Releases : ApiBase0<ReleasesArguments, ReleasesContainer>
	{
		#region constructors

		public Releases(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/releases API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleasesJson : ApiBase0<ReleasesArguments, string>
	{
		#region constructors

		public ReleasesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/releases API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleasesXml : XmlApiFacade<ReleasesArguments>
	{
		#region constructors

		public ReleasesXml(IRequest request) : base(request)
		{
		}

		#endregion
		
	}

}
