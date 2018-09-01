using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Arguments;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Arguments;
using FRED.Api.Tags.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace FRED.Api.Tags.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/tags/series API endpoint. Results are returned in a TagSeriesContainer instance.
	/// </summary>
	public class TagsSeries : ApiBase, ITagsSeries
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public TagsSeriesArguments Arguments { get; set; } = new TagsSeriesArguments();

		#endregion

		#region constructors

		public TagsSeries(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="TagSeriesContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public TagSeriesContainer Fetch()
		{
			TagSeriesContainer result = base.Fetch<TagSeriesContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="TagSeriesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<TagSeriesContainer> FetchAsync()
		{
			TagSeriesContainer result = await base.FetchAsync<TagSeriesContainer>();

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
	/// Defines the interface for TagsSeries types.
	/// </summary>
	public interface ITagsSeries : IApiBase
	{
		#region properties

		TagsSeriesArguments Arguments { get; set; }

		#endregion

		#region public methods

		TagSeriesContainer Fetch();

		Task<TagSeriesContainer> FetchAsync();

		#endregion

	}

}
