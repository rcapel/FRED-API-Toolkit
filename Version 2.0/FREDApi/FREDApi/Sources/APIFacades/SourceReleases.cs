using FRED.Api.Sources.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using System.Threading.Tasks;
using Newtonsoft.Json;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Sources.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/source/releases API endpoint. Results are returned in a SourceReleasesContainer instance.
	/// </summary>
	public class SourceReleases : ApiBase, ISourceReleases
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SourceReleasesArguments Arguments { get; set; } = new SourceReleasesArguments();

		#endregion

		#region constructors

		public SourceReleases(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="SourceReleasesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public SourceReleasesContainer Fetch()
		{
			SourceReleasesContainer result = base.Fetch<SourceReleasesContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SourceReleasesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<SourceReleasesContainer> FetchAsync()
		{
			SourceReleasesContainer result = await base.FetchAsync<SourceReleasesContainer>();

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
	/// Defines the interface for SourceReleases types.
	/// </summary>
	public interface ISourceReleases : IApiBase
	{
		#region properties

		SourceReleasesArguments Arguments { get; set; }

		#endregion

		#region public methods

		SourceReleasesContainer Fetch();

		Task<SourceReleasesContainer> FetchAsync();

		#endregion

	}

}
