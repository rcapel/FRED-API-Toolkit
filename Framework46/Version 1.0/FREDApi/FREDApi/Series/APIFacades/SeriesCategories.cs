using FRED.API.Categories.Data;
using FRED.API.Series.Arguments;
using FRED.API.Base.APIFacades;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class SeriesCategories : ApiBase<SeriesCategoriesArguments, CategoryContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesCategoriesJson : ApiBase<SeriesCategoriesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesCategoriesXml : XmlApiFacade<SeriesCategoriesArguments>
	{
	}

}
