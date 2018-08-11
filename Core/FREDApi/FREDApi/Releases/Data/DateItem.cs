using System;

namespace FRED.Api.Releases.Data
{
	/// <summary>
	/// Provides data properties for a date. 
	/// </summary>
	public class DateItem
	{
		#region properties

		public int release_id { get; set; }
		public DateTime date { get; set; }

		#endregion

	}
}
