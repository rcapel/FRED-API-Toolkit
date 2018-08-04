using FRED.Api.Core.Arguments.Validation.Common;
using FRED.Api.Series.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.Api.Core.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the required "series_search_text" property.
	/// </summary>
	public class SeriesSearchTextRequired : Required
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "series_search_text" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		private static readonly List<Type> supportedTypes = new List<Type>
		{
            typeof(SeriesSearchTagsArguments),
            typeof(SeriesSearchRelatedTagsArguments)
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
