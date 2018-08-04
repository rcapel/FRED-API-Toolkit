using FRED.Api.Series.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class SeriesSearchTags : ApiBase<SeriesSearchTagsArguments, TagContainer>
	{
		#region constructors

		public SeriesSearchTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchTagsJson : ApiBase<SeriesSearchTagsArguments, string>
	{
		#region constructors

		public SeriesSearchTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchTagsXml : XmlApiFacade<SeriesSearchTagsArguments>
	{
		#region constructors

		public SeriesSearchTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
