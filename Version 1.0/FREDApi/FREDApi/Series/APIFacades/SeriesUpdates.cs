using FRED.API.Series.Arguments;
using FRED.API.Series.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned in a SeriesUpdateContainer instance.
	/// </summary>
	public class SeriesUpdates : ApiBase<SeriesUpdatesArguments, SeriesUpdateContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesUpdatesJson : ApiBase<SeriesUpdatesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesUpdatesXml : XmlApiFacade<SeriesUpdatesArguments>
	{
	}

}
