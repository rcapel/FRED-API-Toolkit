using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Arguments;
using FRED.Api.Tags.Data;

namespace FRED.Api.Tags.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned in a TagSeriesContainer instance.
	/// </summary>
	public class TagsSeries : ApiBase0<TagsSeriesArguments, TagSeriesContainer>
	{
		#region constructors

		public TagsSeries(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class TagsSeriesJson : ApiBase0<TagsSeriesArguments, string>
	{
		#region constructors

		public TagsSeriesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class TagsSeriesXml : XmlApiFacade<TagsSeriesArguments>
	{
		#region constructors

		public TagsSeriesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}

