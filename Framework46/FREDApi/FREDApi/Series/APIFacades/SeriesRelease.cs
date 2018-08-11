using FRED.API.Releases.Data;
using FRED.API.Series.Arguments;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned in a ReleaseContainer instance.
	/// </summary>
	public class SeriesRelease : ApiBase<SeriesReleaseArguments, ReleaseContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesReleaseJson : ApiBase<SeriesReleaseArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesReleaseXml : XmlApiFacade<SeriesReleaseArguments>
	{
	}

}

