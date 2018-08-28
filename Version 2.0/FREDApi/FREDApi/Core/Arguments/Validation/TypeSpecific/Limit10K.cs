using FRED.Api.Core.Arguments.Validation.Common;
using FRED.Api.Releases.Arguments;
using FRED.Api.Series.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.Api.Core.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the "limit" property and impose an upper bound of 10,000 to that property's value.
	/// </summary>
	public class Limit10K : Limit
	{
		#region properties

		private static readonly List<Type> supportedTypes = new List<Type> { typeof(ReleaseDatesArguments), typeof(SeriesVintageDatesArguments) };
		/// <summary>
		/// A list of types supported by this class.
		/// </summary>
		protected override List<Type> SupportedTypes
		{
			get { return supportedTypes; }
		}

		/// <summary>
		/// The maximum limit value.
		/// </summary>
		protected override int Maximum
		{
			get { return 10000; }
		}

		#endregion

	}
}
