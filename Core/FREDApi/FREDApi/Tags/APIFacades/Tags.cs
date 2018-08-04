using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Arguments;
using FRED.Api.Tags.Data;

namespace FRED.Api.Tags.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class Tags : ApiBase<TagsArguments, TagContainer>
	{
		#region constructors

		public Tags(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class TagsJson : ApiBase<TagsArguments, string>
	{
		#region constructors

		public TagsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/tags API endpoint. Results are returned as an XML string.
	/// </summary>
	public class TagsXml : XmlApiFacade<TagsArguments>
	{
		#region constructors

		public TagsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}

