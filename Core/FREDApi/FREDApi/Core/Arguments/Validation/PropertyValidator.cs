using System;

namespace FRED.Api.Core.Arguments.Validation
{
	/// <summary>
	/// Provides default behavior for validator subclasses that validate properties.
	/// </summary>
	public abstract class PropertyValidator : Validator
	{
		#region properties

		/// <summary>
		/// The name of the property being validated.
		/// </summary>
		protected string PropertyName { get; private set; }

		/// <summary>
		/// The value of the property being validated.
		/// </summary>
		protected object Value { get; private set; }

		/// <summary>
		/// The name of a property that is required but not present for validation.
		/// </summary>
		internal string MissingPropertyName { get; set; }

		#endregion

		#region public methods

		/// <summary>
		/// Attempt to validate a property value.
		/// </summary>
		/// <param name="propertyName">The property name that this instance must support for this instance to perform validation.</param>
		/// <param name="type">The Argument type that this instance must support for this instance to perform validation.</param>
		/// <param name="value">The value to validate.</param>
		/// <returns>Null if the instance does not support validation for either the <paramref name="type"/> or the <paramref name="propertyName"/>;
		/// otherwise a boolean indicating if the <paramref name="value"/> is valid.</returns>
		public bool? Validate(string propertyName, Type type, object value)
		{
			if (!Validates(propertyName) || !Validates(type))
				return null;

			Type = type;
			PropertyName = propertyName;
			Value = value;

			return Validate();
		}

		#endregion

	}
}
