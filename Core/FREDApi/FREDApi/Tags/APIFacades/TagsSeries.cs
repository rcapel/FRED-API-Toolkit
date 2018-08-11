using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using AngularConsumer1.Tags.Arguments;
using AngularConsumer1.Tags.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace AngularConsumer1.Tags.ApiFacades
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
		public new TagSeriesContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<TagSeriesContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="TagSeriesContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<TagSeriesContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<TagSeriesContainer>(json);

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
