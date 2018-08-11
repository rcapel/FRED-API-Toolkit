using AngularConsumer1.Categories.Arguments;
using AngularConsumer1.Core.ApiFacades;
using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using AngularConsumer1.Tags.Data;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace AngularConsumer1.Categories.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category/tags API endpoint. Results are returned in a TagContainer instance.
	/// </summary>
	public class CategoryTags : ApiBase, ICategoryTags
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public CategoryTagsArguments Arguments { get; set; } = new CategoryTagsArguments();

		#endregion

		#region constructors

		public CategoryTags(IRequest request = null) : base(request)
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
	/// Defines the interface for CategoryTags types.
	/// </summary>
	public interface ICategoryTags : IApiBase
	{
		#region properties

		CategoryTagsArguments Arguments { get; set; }

		#endregion

		#region public methods

		TagContainer Fetch();

		Task<TagContainer> FetchAsync();

		#endregion

	}

}
