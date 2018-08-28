using FRED.Api.Categories.Arguments;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Arguments;
using FRED.Api.Core.Requests;
using FRED.Api.Tags.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace FRED.Api.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/related_tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryRelatedTags : ApiBase, ICategoryRelatedTags
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public CategoryRelatedTagsArguments Arguments { get; set; } = new CategoryRelatedTagsArguments();

		#endregion

		#region constructors

		public CategoryRelatedTags(IRequest request = null) : base(request)
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
		public TagContainer Fetch()
		{
			TagContainer result = base.Fetch<TagContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="TagContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<TagContainer> FetchAsync()
		{
			TagContainer result = await base.FetchAsync<TagContainer>();

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
	/// Defines the interface for CategoryRelatedTags types.
	/// </summary>
	public interface ICategoryRelatedTags : IApiBase
	{
		#region properties

		CategoryRelatedTagsArguments Arguments { get; set; }

		#endregion

		#region public methods

		TagContainer Fetch();

		Task<TagContainer> FetchAsync();

		#endregion

	}

}
