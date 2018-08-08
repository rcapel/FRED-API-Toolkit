using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/releases/dates API endpoint. Results are returned in a ReleasesDateContainer instance.
	/// </summary>
	public class ReleasesDates : ApiBase0<ReleasesDatesArguments, ReleasesDateContainer>
	{
		#region constructors

		public ReleasesDates(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/releases/dates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleasesDatesJson : ApiBase0<ReleasesDatesArguments, string>
	{
		#region constructors

		public ReleasesDatesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/releases/dates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleasesDatesXml : XmlApiFacade<ReleasesDatesArguments>
	{
		#region constructors

		public ReleasesDatesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
