using FRED.Api.Series.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class SeriesSearchRelatedTags : ApiBase0<SeriesSearchRelatedTagsArguments, TagContainer>
	{
		#region constructors

		public SeriesSearchRelatedTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesSearchRelatedTagsJson : ApiBase0<SeriesSearchRelatedTagsArguments, string>
	{
		#region constructors

		public SeriesSearchRelatedTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/search/related_tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesSearchRelatedTagsXml : XmlApiFacade<SeriesSearchRelatedTagsArguments>
	{
		#region constructors

		public SeriesSearchRelatedTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
