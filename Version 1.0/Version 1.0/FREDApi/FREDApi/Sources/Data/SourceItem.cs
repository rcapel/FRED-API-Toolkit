using System;

namespace FRED.API.Sources.Data
{
	/// <summary>
	/// Provides data properties for a source. 
	/// </summary>
	public partial class SourceItem
	{
		#region properties

		public int id { get; set; }
		public DateTime realtime_start { get; set; }
		public DateTime realtime_end { get; set; }
		public string name { get; set; }
		public string link { get; set; }

		#endregion

	}
}
