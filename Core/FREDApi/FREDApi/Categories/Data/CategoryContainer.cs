using System.Collections.Generic;

namespace AngularConsumer1.Categories.Data
{
	/// <summary>
	/// Provides data properties for a category container, including a collection of categories. 
	/// </summary>
	public class CategoryContainer
	{
		#region properties

		public List<CategoryItem> Categories { get; set; }

		#endregion

	}
}