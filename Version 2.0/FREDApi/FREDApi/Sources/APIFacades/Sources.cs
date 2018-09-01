using FRED.Api.Sources.Arguments;
using FRED.Api.Sources.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using System.Threading.Tasks;
using FRED.Api.Core.Arguments;
using Newtonsoft.Json;

namespace FRED.Api.Sources.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/sources API endpoint. Results are returned in a SourcesContainer instance.
	/// </summary>
	public class Sources : ApiBase, ISources
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SourcesArguments Arguments { get; set; } = new SourcesArguments();

		#endregion

		#region constructors

		public Sources(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="SourcesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public SourcesContainer Fetch()
		{
			SourcesContainer result = base.Fetch<SourcesContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SourcesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<SourcesContainer> FetchAsync()
		{
			SourcesContainer result = await base.FetchAsync<SourcesContainer>();

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
	/// Defines the interface for Sources types.
	/// </summary>
	public interface ISources : IApiBase
	{
		#region properties

		SourcesArguments Arguments { get; set; }

		#endregion

		#region public methods

		SourcesContainer Fetch();

		Task<SourcesContainer> FetchAsync();

		#endregion

	}

}
