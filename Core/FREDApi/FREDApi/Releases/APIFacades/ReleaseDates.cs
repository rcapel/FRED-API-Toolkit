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
	/// Provides a facade for consuming the fred/release/dates API endpoint. Results are returned in a ReleaseDateContainer instance.
	/// </summary>
	public class ReleaseDates : ApiBase, IReleaseDates
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleaseDatesArguments Arguments { get; set; } = new ReleaseDatesArguments();

		#endregion

		#region constructors

		public ReleaseDates(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleaseDateContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new ReleaseDateContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<ReleaseDateContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleaseDateContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<ReleaseDateContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<ReleaseDateContainer>(json);

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
	/// Defines the interface for ReleaseDates types.
	/// </summary>
	public interface IReleaseDates : IApiBase
	{
		#region properties

		ReleaseDatesArguments Arguments { get; set; }

		#endregion

		#region public methods

		ReleaseDateContainer Fetch();

		Task<ReleaseDateContainer> FetchAsync();

		#endregion

	}

}
