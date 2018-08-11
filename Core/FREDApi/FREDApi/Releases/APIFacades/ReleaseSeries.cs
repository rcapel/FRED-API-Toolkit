using AngularConsumer1.Releases.Arguments;
using AngularConsumer1.Series.Data;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Requests;
using Newtonsoft.Json;
using System.Threading.Tasks;
using AngularConsumer1.Core.Arguments;

namespace AngularConsumer1.Releases.ApiFacades
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
		public new SeriesContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<SeriesContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SeriesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<SeriesContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<SeriesContainer>(json);

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
