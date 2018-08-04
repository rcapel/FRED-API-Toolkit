using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned in a SeriesUpdateContainer instance.
	/// </summary>
	public class SeriesUpdates : ApiBase<SeriesUpdatesArguments, SeriesUpdateContainer>
	{
		#region constructors

		public SeriesUpdates(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesUpdatesJson : ApiBase<SeriesUpdatesArguments, string>
	{
		#region constructors

		public SeriesUpdatesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesUpdatesXml : XmlApiFacade<SeriesUpdatesArguments>
	{
		#region constructors

		public SeriesUpdatesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
