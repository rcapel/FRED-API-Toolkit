using FRED.API.Sources.Arguments;
using FRED.API.Sources.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Sources.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned in a SourcesContainer instance.
	/// </summary>
	public class Sources : ApiBase<SourcesArguments, SourcesContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourcesJson : ApiBase<SourcesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourcesXml : XmlApiFacade<SourcesArguments>
	{
	}

}
