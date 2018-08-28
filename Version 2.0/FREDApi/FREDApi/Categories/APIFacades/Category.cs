using FRED.Api.Categories.Arguments;
using FRED.Api.Categories.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Arguments;
using FRED.Api.Core.Requests;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FRED.Api.Categories.ApiFacades
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
		public CategoryContainer Fetch()
		{
			CategoryContainer result = base.Fetch<CategoryContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoryContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<CategoryContainer> FetchAsync()
		{
			CategoryContainer result = await base.FetchAsync<CategoryContainer>();

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
