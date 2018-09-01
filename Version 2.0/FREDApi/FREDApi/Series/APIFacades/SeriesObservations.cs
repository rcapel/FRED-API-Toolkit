using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Arguments;
using FRED.Api.Core.Requests;
using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned in a ObservationContainer instance.
	/// </summary>
	public class SeriesObservations : ApiBase, ISeriesObservations
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SeriesObservationsArguments Arguments { get; set; } = new SeriesObservationsArguments();

		#endregion

		#region constructors

		public SeriesObservations(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="ObservationContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public ObservationContainer Fetch()
		{
			ObservationContainer result = base.Fetch<ObservationContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ObservationContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<ObservationContainer> FetchAsync()
		{
			ObservationContainer result = await base.FetchAsync<ObservationContainer>();

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
	/// Defines the interface for SeriesObservations types.
	/// </summary>
	public interface ISeriesObservations : IApiBase
	{
		#region properties

		SeriesObservationsArguments Arguments { get; set; }

		#endregion

		#region public methods

		ObservationContainer Fetch();

		Task<ObservationContainer> FetchAsync();

		#endregion

	}

}
