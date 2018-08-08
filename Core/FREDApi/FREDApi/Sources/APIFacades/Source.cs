using FRED.Api.Sources.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Sources.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned in a SourceContainer instance.
	/// </summary>
	public class Source : ApiBase0<SourceArguments, SourceContainer>
	{
		#region constructors

		public Source(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourceJson : ApiBase0<SourceArguments, string>
	{
		#region constructors

		public SourceJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/source API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourceXml : XmlApiFacade<SourceArguments>
	{
		#region constructors

		public SourceXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
