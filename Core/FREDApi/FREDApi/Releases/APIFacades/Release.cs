using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release API endpoint. Results are returned in a ReleaseContainer instance.
	/// </summary>
	public class Release : ApiBase0<ReleaseArguments, ReleaseContainer>
	{
		#region constructors

		public Release(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseJson : ApiBase0<ReleaseArguments, string>
	{
		#region constructors

		public ReleaseJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseXml : XmlApiFacade<ReleaseArguments>
	{
		#region constructors

		public ReleaseXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
