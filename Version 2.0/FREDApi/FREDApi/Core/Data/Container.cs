﻿using System;

namespace FRED.Api.Core.Data
{
	/// <summary>
	/// Provides data properties for an item container.
	/// </summary>
	public class Container
	{
		#region properties

		public DateTime realtime_start { get; set; }
		public DateTime realtime_end { get; set; }

		#endregion

	}
}
