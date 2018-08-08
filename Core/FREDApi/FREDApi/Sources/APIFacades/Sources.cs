using FRED.Api.Sources.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Sources.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned in a SourcesContainer instance.
	/// </summary>
	public class Sources : ApiBase0<SourcesArguments, SourcesContainer>
	{
		#region constructors

		public Sources(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourcesJson : ApiBase0<SourcesArguments, string>
	{
		#region constructors

		public SourcesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourcesXml : XmlApiFacade<SourcesArguments>
	{
		#region constructors

		public SourcesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
