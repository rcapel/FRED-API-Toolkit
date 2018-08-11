using AngularConsumer1.Core.Arguments.Validation.Common;
using AngularConsumer1.Series.Arguments;
using System;
using System.Collections.Generic;

namespace AngularConsumer1.Core.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the required "search_text" property.
	/// </summary>
	public class SearchTextRequired : Required
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "search_text" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		private static readonly List<Type> supportedTypes = new List<Type>
		{
			typeof(SeriesSearchArguments)
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
