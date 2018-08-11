using FRED.API.Series.Arguments;
using FRED.API.Series.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned in a VintageDateContainer instance.
	/// </summary>
	public class SeriesVintageDates : ApiBase<SeriesVintageDatesArguments, VintageDateContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesVintageDatesJson : ApiBase<SeriesVintageDatesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesVintageDatesXml : XmlApiFacade<SeriesVintageDatesArguments>
	{
	}

}
