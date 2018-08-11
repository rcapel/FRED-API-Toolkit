using AngularConsumer1.Categories.Arguments;
using AngularConsumer1.Categories.Data;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AngularConsumer1.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint.
	/// </summary>
	public class Category : ApiBase, ICategory
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public CategoryArguments Arguments { get; set; } = new CategoryArguments();

		/// <summary>
		/// A dictionary of errors that are a result of validating argument values.
		/// Each key is the argument property name and each value is the associated error message.
		/// </summary>
		public Dictionary<string, string> ValidationErrors { get; private set; }

		#endregion

		#region constructors

		public Category(IRequest request = null) : base(request)
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
	/// Defines the interface for Category types.
	/// </summary>
	public interface ICategory : IApiBase, IArgumentsBase
	{
		#region properties

		CategoryArguments Arguments { get; set; }

		#endregion

		#region public methods

		CategoryContainer Fetch();

		Task<CategoryContainer> FetchAsync();

		#endregion

	}

}
