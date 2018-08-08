using FRED.Api.Releases.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/series API endpoint. Results are returned in a SeriesContainer instance.
	/// </summary>
	public class ReleaseSeries : ApiBase0<ReleaseSeriesArguments, SeriesContainer>
	{
		#region constructors

		public ReleaseSeries(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class ReleaseSeriesJson : ApiBase0<ReleaseSeriesArguments, string>
	{
		#region constructors

		public ReleaseSeriesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/release/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class ReleaseSeriesXml : XmlApiFacade<ReleaseSeriesArguments>
	{
		#region constructors

		public ReleaseSeriesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
