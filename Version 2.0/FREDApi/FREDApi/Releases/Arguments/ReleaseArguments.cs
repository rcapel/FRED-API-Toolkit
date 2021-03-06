﻿using FRED.Api.Core.Arguments;
using System;

namespace FRED.Api.Releases.Arguments
{
	/// <summary>
	/// Provides argument properties for the Release API facade.
	/// </summary>
	public class ReleaseArguments : ArgumentsBase
	{
		#region properties

		public int release_id { get; set; }
		public DateTime? realtime_start { get; set; }
		public DateTime? realtime_end { get; set; }

		internal override string UrlExtension
		{
			get { return "release"; }
		}

		#endregion

	}
}
