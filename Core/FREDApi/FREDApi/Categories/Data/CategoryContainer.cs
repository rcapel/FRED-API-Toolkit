using System.Collections.Generic;

namespace FRED.Api.Categories.Data
{
	/// <summary>
	/// Provides data properties for a category container, including a collection of categories. 
	/// </summary>
	public class CategoryContainer
	{
		#region properties

		public List<CategoryItem> categories { get; set; }

		#endregion

	}
}