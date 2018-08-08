using FRED.Api.Categories.Data;
using FRED.Api.Series.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class SeriesCategories : ApiBase0<SeriesCategoriesArguments, CategoryContainer>
	{
		#region constructors

		public SeriesCategories(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesCategoriesJson : ApiBase0<SeriesCategoriesArguments, string>
	{
		#region constructors

		public SeriesCategoriesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesCategoriesXml : XmlApiFacade<SeriesCategoriesArguments>
	{
		#region constructors

		public SeriesCategoriesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
