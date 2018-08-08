using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned in a SingleSeriesContainer instance.
	/// </summary>
	public class Series : ApiBase0<SeriesArguments, SingleSeriesContainer>
	{
		#region constructors

		public Series(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesJson : ApiBase0<SeriesArguments, string>
	{
		#region constructors

		public SeriesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesXml : XmlApiFacade<SeriesArguments>
	{
		#region constructors

		public SeriesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
