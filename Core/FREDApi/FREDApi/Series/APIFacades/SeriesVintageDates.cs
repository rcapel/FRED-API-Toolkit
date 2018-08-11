using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Series.Data;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Requests;
using AngularConsumer1.Core.Arguments;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AngularConsumer1.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned in a VintageDateContainer instance.
	/// </summary>ApiBase0<SeriesVintageDatesArguments, VintageDateContainer>
	public class SeriesVintageDates : ApiBase, ISeriesVintageDates
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SeriesVintageDatesArguments Arguments { get; set; } = new SeriesVintageDatesArguments();

		#endregion

		#region constructors

		public SeriesVintageDates(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="VintageDateContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new VintageDateContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<VintageDateContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="VintageDateContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<VintageDateContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<VintageDateContainer>(json);

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
	/// Defines the interface for SeriesVintageDates types.
	/// </summary>
	public interface ISeriesVintageDates : IApiBase
	{
		#region properties

		SeriesVintageDatesArguments Arguments { get; set; }

		#endregion

		#region public methods

		VintageDateContainer Fetch();

		Task<VintageDateContainer> FetchAsync();

		#endregion

	}

}
