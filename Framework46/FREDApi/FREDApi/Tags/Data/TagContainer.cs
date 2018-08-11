using FRED.API.Base;
using FRED.API.Base.Data;
using System.Collections.Generic;

namespace FRED.API.Tags.Data
{
	/// <summary>
	/// Provides data properties for a tag container, including a collection of tags. 
	/// </summary>
	public class TagContainer : ExtendedContainer<FREDData.tags_order_by_values>
	{
		#region properties

		public List<TagItem> tags { get; set; }

		#endregion

	}
}
