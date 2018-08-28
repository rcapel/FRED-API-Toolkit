using FRED.API.Base.Arguments.Validation.Common;
using FRED.API.Series.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.API.Base.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the required "series_id" property.
	/// </summary>
	public class SeriesIdRequired : Required
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "series_id" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		private static readonly List<Type> supportedTypes = new List<Type>
		{
			typeof(SeriesArguments),
			typeof(SeriesCategoriesArguments),
			typeof(SeriesObservationsArguments),
			typeof(SeriesReleaseArguments),
			typeof(SeriesTagsArguments),
			typeof(SeriesVintageDatesArguments)
		};
		/// <summary>
		/// A list of types supported by this class.
		/// </summary>
		protected override List<Type> SupportedTypes
		{
			get { return supportedTypes; }
		}

		#endregion

	}
}
