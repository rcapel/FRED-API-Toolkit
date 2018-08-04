using FRED.Api.Categories.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned in a SeriesContainer instance.
	/// </summary>
	public class CategorySeries : ApiBase<CategorySeriesArguments, SeriesContainer>
	{
		#region constructors

		public CategorySeries(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class CategorySeriesJson : ApiBase<CategorySeriesArguments, string>
	{
		#region constructors

		public CategorySeriesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/category/series API endpoint. Results are returned as an XML string.
	/// </summary>
	public class CategorySeriesXml : XmlApiFacade<CategorySeriesArguments>
	{
		#region constructors

		public CategorySeriesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
