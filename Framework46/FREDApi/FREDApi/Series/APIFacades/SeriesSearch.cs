using FRED.API.Series.Arguments;
using FRED.API.Series.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned in a SeriesSearchContainer instance.
	/// </summary>
	public class SeriesSearch : ApiBase<SeriesSearchArguments, SeriesSearchContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchJson : ApiBase<SeriesSearchArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchXml : XmlApiFacade<SeriesSearchArguments>
	{
	}

}
