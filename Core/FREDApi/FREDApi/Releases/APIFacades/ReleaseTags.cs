using FRED.Api.Releases.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Tags.Data;
using FRED.Api.Core.Requests;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class ReleaseTags : ApiBase, IReleaseTags
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleaseTagsArguments Arguments { get; set; } = new ReleaseTagsArguments();

		#endregion

		#region constructors

		public ReleaseTags(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="TagContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new TagContainer Fetch()
		{
			string json = base.Fetch();
			var result = JsonConvert.DeserializeObject<TagContainer>(json);

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="TagContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public new async Task<TagContainer> FetchAsync()
		{
			string json = await base.FetchAsync();
			var result = JsonConvert.DeserializeObject<TagContainer>(json);

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
	/// Defines the interface for ReleaseTags types.
	/// </summary>
	public interface IReleaseTags : IApiBase
	{
		#region properties

		ReleaseTagsArguments Arguments { get; set; }

		#endregion

		#region public methods

		TagContainer Fetch();

		Task<TagContainer> FetchAsync();

		#endregion

	}

}
