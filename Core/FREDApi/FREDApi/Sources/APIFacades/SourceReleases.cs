using FRED.Api.Sources.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Sources.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned in a SourceReleasesContainer instance.
	/// </summary>
	public class SourceReleases : ApiBase<SourceReleasesArguments, SourceReleasesContainer>
	{
		#region constructors

		public SourceReleases(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SourceReleasesJson : ApiBase<SourceReleasesArguments, string>
	{
		#region constructors

		public SourceReleasesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SourceReleasesXml : XmlApiFacade<SourceReleasesArguments>
	{
		#region constructors

		public SourceReleasesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
