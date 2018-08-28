using System;
using System.Collections.Generic;

namespace FRED.Api.Core.Arguments.Validation
{
	/// <summary>
	/// Provides behavior for a list of validators.
	/// </summary>
	public class Validators : List<Validator>
	{
		#region properties

		private Dictionary<string, string> validationErrors = new Dictionary<string, string>();
		/// <summary>
		/// A dictionary of validation errors: the key is the property name and the value is a message.
		/// </summary>
		public Dictionary<string, string> ValidationErrors
		{
			get { return validationErrors = validationErrors ?? new Dictionary<string, string>(); }
		}

		#endregion

		#region public methods

		/// <summary>
		/// Validate a property.
		/// </summary>
		/// <param name="propertyName">The name of the property to validate.</param>
		/// <param name="type">The argument type that constrains the validator instances that can validate the property.
		/// If null, there is no argument type constraint.</param>
		/// <param name="value">The property value to validate.</param>
		public void Validate(string propertyName, Type type, object value)
		{
			foreach (Validator validator in this)
			{
				PropertyValidator propertyValidator = validator as PropertyValidator;
				if (propertyValidator == null)
					continue;

				bool? isValid = propertyValidator.Validate(propertyName, type, value);
				if (isValid == null)
					continue; //iteration instance can't validate property; next

				if (!isValid.Value)
				{
					ValidationErrors.Add(propertyName, validator.Message);
				}
				break; //validated by the current iteration instance
			}
		}

		/// <summary>
		/// Cross-validate property values.
		/// </summary>
		/// <param name="propertyNameValues">A dictionary of property names and values.</param>
		public void Validate(Dictionary<string, object> propertyNameValues)
		{
			foreach (Validator validator in this)
			{
				{
					DependencyValidator dependencyValidator = validator as DependencyValidator;
					if (dependencyValidator == null)
						continue;

					bool? isValid = dependencyValidator.Validate(propertyNameValues);
					if (isValid.HasValue && !isValid.Value)
					{
						ValidationErrors.Add(dependencyValidator.PropertyNames, validator.Message);
						break;
					}
				}
			}
		}

		#endregion

		#region internal methods

		/// <summary>
		/// Clear all validation errors from the instance.
		/// </summary>
		internal void ClearErrors()
		{
			ValidationErrors.Clear();
		}

		#endregion

	}
}
