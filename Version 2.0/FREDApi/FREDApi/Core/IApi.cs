using FRED.Api.Core.Arguments;
using System.Threading.Tasks;

namespace FRED.Api.Core
{
	public interface IApi<TArguments, TContainer> 
		where TArguments : ArgumentsBase, new()
		where TContainer : class
	{
		#region properties

		/// <summary>
		/// FRED API key.
		/// </summary>
		string ApiKey { get; set; }

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// An object containing FRED data, the type of which is determined by TContainer. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		string Fetch();

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A task that ultimately returns an object containing FRED data, the type of which is determined by this instance.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		Task<string> FetchAsync();

		#endregion

	}
}
