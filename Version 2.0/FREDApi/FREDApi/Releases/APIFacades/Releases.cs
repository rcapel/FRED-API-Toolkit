using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using Newtonsoft.Json;
using System.Threading.Tasks;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/releases API endpoint. Results are returned in a ReleasesContainer instance.
	/// </summary>
	public class Releases : ApiBase, IReleases
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleasesArguments Arguments { get; set; } = new ReleasesArguments();

		#endregion

		#region constructors

		public Releases(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleasesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public ReleasesContainer Fetch()
		{
			ReleasesContainer result = base.Fetch<ReleasesContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleasesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<ReleasesContainer> FetchAsync()
		{
			ReleasesContainer result = await base.FetchAsync<ReleasesContainer>();

			return result;
		}

		/// <summary>
		/// Returns the arguments for the instance.
		/// </summary>
		/// <returns>The arguments for the instance.</returns>
		public override ArgumentsBase GetArguments()
		{
			return Arguments;
		}

		#endregion

	}

	/// <summary>
	/// Defines the interface for Releases types.
	/// </summary>
	public interface IReleases : IApiBase
	{
		#region properties

		ReleasesArguments Arguments { get; set; }

		#endregion

		#region public methods

		ReleasesContainer Fetch();

		Task<ReleasesContainer> FetchAsync();

		#endregion

	}

}
