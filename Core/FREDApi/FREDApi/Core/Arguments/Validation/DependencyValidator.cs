using System.Collections.Generic;
using System.Text;

namespace AngularConsumer1.Core.Arguments.Validation
{
	/// <summary>
	/// Provides default behavior for validator subclasses that cross-validate properties.
	/// </summary>
	public abstract class DependencyValidator : Validator
	{
		#region properties

		/// <summary>
		/// The names of the properties being validated.
		/// </summary>
		public string PropertyNames
		{
			get
			{
				if (Values == null)
					return null;
				StringBuilder builder = new StringBuilder();
				foreach (string propertyName in SupportedPropertyNames)
				{
					builder.Append(propertyName + "/");
				}
				return builder.ToString().TrimEnd('/');
			}
		}

		/// <summary>
		/// The values of the properties being validated.
		/// </summary>
		protected object[] Values { get; private set; }

		#endregion

		#region public methods

		/// <summary>
		/// Attempt to cross-validate property values.
		/// </summary>
		/// <param name="propertyNameValues">A dictionary of property names and values.</param>
		/// <returns>Null if the instance does not support validation collectively for the properties named in <paramref name="propertyNameValues"/>;
		/// otherwise a boolean indicating whether or not the properties cross-validate.</returns>
		public bool? Validate(Dictionary<string, object> propertyNameValues)
		{
			Values = new object[SupportedPropertyNames.Count];
			int i = 0;
			foreach (string propertyName in SupportedPropertyNames)
			{
				object value = null;
				propertyNameValues.TryGetValue(propertyName, out value);
				Values[i] = value;
				i++;
			}

			return Validate();
		}

		#endregion

	}
}
