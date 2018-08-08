using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using System.Threading.Tasks;
using Newtonsoft.Json;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/updates API endpoint. Results are returned in a SeriesUpdateContainer instance.
	/// </summary>
	public class SeriesUpdates : ApiBase, ISeriesUpdates
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SeriesUpdatesArguments Arguments { get; set; } = new SeriesUpdatesArguments();

		#endregion

		#region constructors

		public SeriesUpdates(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="SeriesUpdateContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new SeriesUpdateContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<SeriesUpdateContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SeriesUpdateContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<SeriesUpdateContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<SeriesUpdateContainer>(json);

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
	/// Defines the interface for SeriesUpdates types.
	/// </summary>
	public interface ISeriesUpdates : IApiBase
	{
		#region properties

		SeriesUpdatesArguments Arguments { get; set; }

		#endregion

		#region public methods

		SeriesUpdateContainer Fetch();

		Task<SeriesUpdateContainer> FetchAsync();

		#endregion

	}

}
