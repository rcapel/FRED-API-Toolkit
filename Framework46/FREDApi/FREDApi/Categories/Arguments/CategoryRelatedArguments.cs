using FRED.API.Base.Arguments;
using System;

namespace FRED.API.Categories.Arguments
{
	/// <summary>
	/// Provides argument properties for the CategoryRelated API facade.
	/// </summary>
	public class CategoryRelatedArguments : ArgumentsBase
	{
		#region properties

		public int category_id { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }

		internal override string UrlExtension
		{
			get { return "category/related"; }
		}

		#endregion

	}
}
