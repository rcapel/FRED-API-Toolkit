using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/dates API endpoint. Results are returned in a ReleaseDateContainer instance.
	/// </summary>
	public class ReleaseDates : ApiBase0<ReleaseDatesArguments, ReleaseDateContainer>
	{
		#region constructors

		public ReleaseDates(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/dates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseDatesJson : ApiBase0<ReleaseDatesArguments, string>
	{
		#region constructors

		public ReleaseDatesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/dates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseDatesXml : XmlApiFacade<ReleaseDatesArguments>
	{
		#region constructors

		public ReleaseDatesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
