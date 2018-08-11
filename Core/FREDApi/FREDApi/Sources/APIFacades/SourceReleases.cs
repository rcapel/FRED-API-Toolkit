using AngularConsumer1.Sources.Arguments;
using AngularConsumer1.Sources.Data;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Requests;
using System.Threading.Tasks;
using Newtonsoft.Json;
using AngularConsumer1.Core.Arguments;

namespace AngularConsumer1.Sources.ApiFacades
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
		public new SourceReleasesContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<SourceReleasesContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="SourceReleasesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<SourceReleasesContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<SourceReleasesContainer>(json);

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
