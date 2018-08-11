using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Series.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace AngularConsumer1.Series.ApiFacades
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
		public new ObservationContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<ObservationContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ObservationContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<ObservationContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<ObservationContainer>(json);

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
