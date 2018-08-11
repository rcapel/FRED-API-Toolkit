using FRED.API.Categories.Arguments;
using FRED.API.Series.Data;
using FRED.API.Base.APIFacades;

namespace FRED.API.Categories.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned in a SeriesContainer instance.
	/// </summary>
	public class CategorySeries : ApiBase<CategorySeriesArguments, SeriesContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategorySeriesJson : ApiBase<CategorySeriesArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategorySeriesXml : XmlApiFacade<CategorySeriesArguments>
	{
	}

}
