using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Core.Arguments.Validation.Common;
using System;
using System.Collections.Generic;

namespace AngularConsumer1.Core.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the "limit" property and impose an upper bound of 100,000 to that property's value.
	/// </summary>
	public class Limit100K : Limit
	{
		#region properties

		private static readonly List<Type> supportedTypes = new List<Type> { typeof(SeriesObservationsArguments) };
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
			get { return 100000; }
		}

		#endregion

	}
}
