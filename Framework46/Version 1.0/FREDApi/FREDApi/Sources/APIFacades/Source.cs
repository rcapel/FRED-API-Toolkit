using FRED.API.Sources.Arguments;
using FRED.API.Sources.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Sources.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned in a SourceContainer instance.
	/// </summary>
	public class Source : ApiBase<SourceArguments, SourceContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourceJson : ApiBase<SourceArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourceXml : XmlApiFacade<SourceArguments>
	{
	}

}
