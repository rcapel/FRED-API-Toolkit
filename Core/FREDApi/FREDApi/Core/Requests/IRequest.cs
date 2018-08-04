using FRED.Api.Core.Arguments;
using System;
using System.Threading.Tasks;

namespace FRED.Api.Core.Requests
{
	/// <summary>
	/// Provides behavior for communicating with FRED service endpoints.
	/// </summary>
	public interface IRequest
    {
		#region properties

		/// <summary>
		/// Indicates whether this instance will attempt to deserialize JSON returned from a fetch.
		/// </summary>
		bool Deserialize { get; set; }

		/// <summary>
		/// Indicates whether this instance expects JSON as the format for data returned from a fetch. 
		/// False indicates that this instance expects XML as the format.
		/// </summary>
		bool Json { get; set; }

		/// <summary>
		/// The URL used in a FRED API fetch.
		/// </summary>
		string Url { get; }

		/// <summary>
		/// Any message returned by the FRED API.
		/// </summary>
		string FetchMessage { get; }

		/// <summary>
		/// Any exception not reflected in the <see cref="FetchMessage"/> property, or null when no exception occurs.
		/// </summary>
		Exception Exception { get; }

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.</typeparam>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A container of type <paramref name="T"/> containing fetch results.</returns>
		T Fetch<T>(ArgumentsBase arguments) where T : class;

		/// <summary>
		/// Fetches data asynchronously from a FRED service endpoint.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.</typeparam>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A Task of type <paramref name="T"/>, the resolution of which is a container of fetch results.</returns>
		Task<T> FetchAsync<T>(ArgumentsBase arguments) where T : class;

		#endregion

	}

}
