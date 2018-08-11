using AngularConsumer1.Core.Arguments;

namespace AngularConsumer1.Categories.Arguments
{
	/// <summary>
	/// Provides argument properties for the Category API facade.
	/// </summary>
	public class CategoryArguments : ArgumentsBase
	{
		#region properties

		public int category_id { get; set; }

		internal override string UrlExtension
		{
			get { return "category"; }
		}

		#endregion

	}
}
