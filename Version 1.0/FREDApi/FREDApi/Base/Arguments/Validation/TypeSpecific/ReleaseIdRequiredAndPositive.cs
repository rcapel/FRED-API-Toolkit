using FRED.API.Base.Arguments.Validation.Common;
using FRED.API.Releases.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.API.Base.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the required, positive "release_id" property.
	/// </summary>
	public class ReleaseIdRequiredAndPositive : Required
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "release_id" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		private static readonly List<Type> supportedTypes = new List<Type>
		{
			typeof(ReleaseArguments),
			typeof(ReleaseDatesArguments),
			typeof(ReleaseSeriesArguments),
			typeof(ReleaseSourcesArguments),
			typeof(ReleaseTagsArguments),
			typeof(ReleaseRelatedTagsArguments)
		};
		/// <summary>
		/// A list of types supported by this class.
		/// </summary>
		protected override List<Type> SupportedTypes
		{
			get { return supportedTypes; }
		}

		/// <summary>
		/// The "invalid" validation message.
		/// </summary>
		public override string Message
		{
			get { return string.Format("Property '{0}' must be valued and positive; found {1}.", PropertyName, Value); }
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Validates the instance's value.
		/// </summary>
		/// <returns>A boolean indicating whether or not the instance's value is valid.</returns>
		protected override bool Validate()
		{
			return base.Validate() && (int)Value > 0;
		}

		#endregion

	}
}
