namespace FRED.Api.Categories.Data
{
	/// <summary>
	/// Provides data properties for a category. 
	/// </summary>
	public partial class CategoryItem
    {
		#region properties

		public int id { get; set; }
		public string name { get; set; }
		public int parent_id { get; set; }

		#endregion

	}
}
