using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned in a SeriesSearchContainer instance.
	/// </summary>
	public class SeriesSearch : ApiBase0<SeriesSearchArguments, SeriesSearchContainer>
	{
		#region constructors

		public SeriesSearch(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchJson : ApiBase0<SeriesSearchArguments, string>
	{
		#region constructors

		public SeriesSearchJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchXml : XmlApiFacade<SeriesSearchArguments>
	{
		#region constructors

		public SeriesSearchXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
