using AngularConsumer1.Categories.Data;
using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Requests;
using System.Threading.Tasks;
using Newtonsoft.Json;
using AngularConsumer1.Core.Arguments;

namespace AngularConsumer1.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/categories API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class SeriesCategories : ApiBase, ISeriesCategories
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SeriesCategoriesArguments Arguments { get; set; } = new SeriesCategoriesArguments();

		#endregion

		#region constructors

		public SeriesCategories(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoriesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new CategoryContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<CategoryContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoryContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<CategoryContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<CategoryContainer>(json);

			return result;
		}

		#endregion

		#region protected methods

		protected override ArgumentsBase GetArguments()
		{
			return Arguments;
		}

		#endregion

	}

	/// <summary>
	/// Defines the interface for SeriesCategories types.
	/// </summary>
	public interface ISeriesCategories : IApiBase
	{
		#region properties

		SeriesCategoriesArguments Arguments { get; set; }

		#endregion

		#region public methods

		CategoryContainer Fetch();

		Task<CategoryContainer> FetchAsync();

		#endregion

	}

}
