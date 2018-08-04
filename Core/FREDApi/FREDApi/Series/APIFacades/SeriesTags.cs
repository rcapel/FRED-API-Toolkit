using FRED.Api.Series.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class SeriesTags : ApiBase<SeriesTagsArguments, TagContainer>
	{
		#region constructors

		public SeriesTags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesTagsJson : ApiBase<SeriesTagsArguments, string>
	{
		#region constructors

		public SeriesTagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesTagsXml : XmlApiFacade<SeriesTagsArguments>
	{
		#region constructors

		public SeriesTagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
