using System;
using System.Collections.Generic;

namespace FRED.Api.Core.Arguments.Validation
{
	/// <summary>
	/// Provides behavior to validate argument property values.
	/// </summary>
	public abstract class Validator
	{
		#region properties

		/// <summary>
		/// A list of property names supported by this instance. Subclasses must implement this property.
		/// </summary>
		protected abstract List<string> SupportedPropertyNames { get; }

		/// <summary>
		/// A list of argument types supported by this instance.
		/// </summary>
		protected virtual List<Type> SupportedTypes { get; }

		/// <summary>
		/// The type being validated.
		/// </summary>
		protected Type Type { get; set;}

		/// <summary>
		/// The "invalid" validation message for the property being validated. Subclasses must implement this property.
		/// </summary>
		public abstract string Message { get; }

		#endregion

		#region internal methods

		/// <summary>
		/// Indicates whether or not this instance validates a property.
		/// </summary>
		/// <param name="propertyName">The property name.</param>
		/// <returns>An indicator as to whether or not this instance validates <paramref name="propertyName"/>.</returns>
		internal bool Validates(string propertyName)
		{
			return SupportedPropertyNames.Contains(propertyName);
		}

		/// <summary>
		/// Indicates whether or not this instance validates an argument type.
		/// </summary>
		/// <param name="type">The argument type.</param>
		/// <returns>An indicator as to whether or not this instance validates <paramref name="type"/>.</returns>
		internal bool Validates(Type type)
		{
			return SupportedTypes == null ? true : SupportedTypes.Contains(type);
		}

		#endregion

		#region protected methods

		/// <summary>
		/// The default behavior for validation. Subclasses can override this class to provide specialized behavior.
		/// </summary>
		/// <returns>True.</returns>
		protected virtual bool Validate()
		{
			return true;
		}

		#endregion

	}
}
