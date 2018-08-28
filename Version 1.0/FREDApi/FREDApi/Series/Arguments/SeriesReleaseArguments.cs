using System;

namespace FRED.API.Series.Arguments
{
	/// <summary>
	/// Provides argument properties for the SeriesRelease API facade.
	/// </summary>
	public class SeriesReleaseArguments : SeriesArguments
	{
		#region properties

		internal override string UrlExtension
		{
			get { return "series/release"; }
		}

		#endregion

	}
}
