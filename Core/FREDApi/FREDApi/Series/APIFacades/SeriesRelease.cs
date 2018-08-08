using FRED.Api.Releases.Data;
using FRED.Api.Series.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned in a ReleaseContainer instance.
	/// </summary>
	public class SeriesRelease : ApiBase0<SeriesReleaseArguments, ReleaseContainer>
	{
		#region constructors

		public SeriesRelease(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesReleaseJson : ApiBase0<SeriesReleaseArguments, string>
	{
		#region constructors

		public SeriesReleaseJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesReleaseXml : XmlApiFacade<SeriesReleaseArguments>
	{
		#region constructors

		public SeriesReleaseXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}

