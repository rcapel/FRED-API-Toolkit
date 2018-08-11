using FRED.API.Series.Arguments;
using FRED.API.Series.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned in a SingleSeriesContainer instance.
	/// </summary>
	public class Series : ApiBase<SeriesArguments, SingleSeriesContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesJson : ApiBase<SeriesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesXml : XmlApiFacade<SeriesArguments>
	{
	}

}
