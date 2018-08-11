using AngularConsumer1.Categories.Arguments;
using AngularConsumer1.Categories.Data;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace AngularConsumer1.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/related API endpoint. Results are returned in a CategoryContainer instance.
	/// </summary>
	public class CategoryRelated : ApiBase, ICategoryRelated
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public CategoryRelatedArguments Arguments { get; set; } = new CategoryRelatedArguments();

		#endregion

		#region constructors

		public CategoryRelated(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoryContainer"/> containing FRED data. 
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
	/// Defines the interface for CategoryRelated types.
	/// </summary>
	public interface ICategoryRelated : IApiBase
	{
		#region properties

		CategoryRelatedArguments Arguments { get; set; }

		#endregion

		#region public methods

		CategoryContainer Fetch();

		Task<CategoryContainer> FetchAsync();

		#endregion

	}

}
