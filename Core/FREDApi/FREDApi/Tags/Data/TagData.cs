using AngularConsumer1.Core;
using System;

namespace AngularConsumer1.Tags.Data
{
	/// <summary>
	/// Provides data properties for a tag. 
	/// </summary>
	public class TagItem
	{
		#region properties

		public string name { get; set; }
		public FREDData.tag_group_id_values group_id { get; set; }
		public string notes { get; set; }
		public DateTime created { get; set; }
		public int popularity { get; set; }
		public int series_count { get; set; }

		#endregion

	}
}
