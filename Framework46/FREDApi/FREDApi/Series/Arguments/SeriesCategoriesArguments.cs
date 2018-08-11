using System;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesCategories API facade.
	/// </summary>
	public class SeriesCategoriesArguments : SeriesArguments
	{
		#region properties

		internal override string UrlExtension
		{
			get { return "series/categories"; }
		}

		#endregion

	}
}
