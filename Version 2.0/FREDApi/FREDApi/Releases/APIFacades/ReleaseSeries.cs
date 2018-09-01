using FRED.Api.Releases.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using Newtonsoft.Json;
using System.Threading.Tasks;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/series API endpoint. Results are returned in a SeriesContainer instance.
	/// </summary>
	public class ReleaseSeries : ApiBase, IReleaseSeries
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleaseSeriesArguments Arguments { get; set; } = new ReleaseSeriesArguments();

		#endregion

		#region constructors

		public ReleaseSeries(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="SeriesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public SeriesContainer Fetch()
		{
			SeriesContainer result = base.Fetch<SeriesContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SeriesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<SeriesContainer> FetchAsync()
		{
			SeriesContainer result = await base.FetchAsync<SeriesContainer>();

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
	/// Defines the interface for ReleaseSeries types.
	/// </summary>
	public interface IReleaseSeries : IApiBase
	{
		#region properties

		ReleaseSeriesArguments Arguments { get; set; }

		#endregion

		#region public methods

		SeriesContainer Fetch();

		Task<SeriesContainer> FetchAsync();

		#endregion

	}

}
