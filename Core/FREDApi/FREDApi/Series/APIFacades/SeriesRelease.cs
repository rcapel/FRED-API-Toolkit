using AngularConsumer1.Releases.Data;
using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Requests;
using System.Threading.Tasks;
using AngularConsumer1.Core.Arguments;
using Newtonsoft.Json;

namespace AngularConsumer1.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/release API endpoint. Results are returned in a ReleaseContainer instance.
	/// </summary>
	public class SeriesRelease : ApiBase, ISeriesRelease
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public SeriesReleaseArguments Arguments { get; set; } = new SeriesReleaseArguments();

		#endregion

		#region constructors

		public SeriesRelease(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoryContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new ReleaseContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<ReleaseContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="CategoryContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<ReleaseContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<ReleaseContainer>(json);

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
	/// Defines the interface for SeriesRelease types.
	/// </summary>
	public interface ISeriesRelease : IApiBase
	{
		#region properties

		SeriesReleaseArguments Arguments { get; set; }

		#endregion

		#region public methods

		ReleaseContainer Fetch();

		Task<ReleaseContainer> FetchAsync();

		#endregion

	}

}
