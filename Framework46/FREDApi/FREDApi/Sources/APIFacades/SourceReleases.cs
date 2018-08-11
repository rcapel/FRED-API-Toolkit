using FRED.API.Sources.Arguments;
using FRED.API.Sources.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Sources.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned in a SourceReleasesContainer instance.
	/// </summary>
	public class SourceReleases : ApiBase<SourceReleasesArguments, SourceReleasesContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourceReleasesJson : ApiBase<SourceReleasesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourceReleasesXml : XmlApiFacade<SourceReleasesArguments>
	{
	}

}
