using System.Collections.Generic;

namespace FRED.API.Base.Arguments.Validation.Common
{
	/// <summary>
	/// Provides behavior for specific argument types that support the "limit" property.
	/// </summary>
	public class Limit : PropertyValidator
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "limit" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		/// <summary>
		/// The "invalid" validation message.
		/// </summary>
		public override string Message
		{
			get { return string.Format("Property '{0}' must be between 1 and {2}, inclusive; found {1}.", PropertyName, Value, Maximum); }
		}

		/// <summary>
		/// The maximum limit value.
		/// </summary>
		protected virtual int Maximum
		{
			get { return 1000; }
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Validates the instance's value.
		/// </summary>
		/// <returns>A boolean indicating whether or not the instance's value is valid.</returns>
		protected override bool Validate()
		{
			return Value == null || ((int)Value).IsBetween(1, Maximum);
		}

		#endregion

	}
}
