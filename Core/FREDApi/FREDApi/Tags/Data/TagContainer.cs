using AngularConsumer1.Core;
using AngularConsumer1.Core.Data;
using System.Collections.Generic;

namespace AngularConsumer1.Tags.Data
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
