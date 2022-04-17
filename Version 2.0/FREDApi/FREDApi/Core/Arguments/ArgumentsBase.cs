using FRED.Api.Core.Arguments.Validation;
using FRED.Api.Core.Arguments.Validation.Common;
using FRED.Api.Core.Arguments.Validation.Dependencies;
using FRED.Api.Core.Arguments.Validation.TypeSpecific;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace FRED.Api.Core.Arguments
{
	/// <summary>
	/// Provides default behavior for arguments.
	/// </summary>
	public abstract class ArgumentsBase
	{
		#region properties

		/// <summary>
		/// The FRED API key.
		/// </summary>
		public string ApiKey { get; set; }

		/// <summary>
		/// The FRED API url extension. For example, in "https://api.stlouisfed.org/fred/category", "category" is the extension.
		/// </summary>
		internal abstract string UrlExtension { get; }

		private Validators validators;
		/// <summary>
		/// A list of <see cref="Validator"/> instances used to validate argument values.
		/// </summary>
		public Validators Validators
		{
			get { return validators = validators ?? new Validators(); }
		}

		/// <summary>
		/// A dictionary of errors that are a result of validating argument values.
		/// Each key is the argument property name and each value is the associated error message.
		/// </summary>
		public Dictionary<string, string> ValidationErrors { get; private set; }

		#endregion

		#region constructors

		public ArgumentsBase()
		{
			Validators.Add(new ReleaseIdRequiredAndPositive());
			Validators.Add(new SeriesIdRequired());
			Validators.Add(new SourceIdRequiredAndPositive());
			Validators.Add(new TagNamesRequired());
			Validators.Add(new SearchTextRequired());
			Validators.Add(new SeriesSearchTextRequired());
			Validators.Add(new Limit10K());
			Validators.Add(new Limit100K());
			Validators.Add(new Limit());
			Validators.Add(new Offset());
			Validators.Add(new TagNamesAndExcludeTagsNames());
		}

		#endregion

		#region internal methods

		/// <summary>
		/// Converts argument values to query string values.
		/// </summary>
		/// <returns>A query string containing argument values.</returns>
		internal string Stringify()
		{
			Dictionary<string, object> propertyNameValues = new Dictionary<string, object>();
			Validators.ClearErrors();

			StringBuilder builder = new StringBuilder();
			builder.Append("&api_key=" + ApiKey);

			Type type = GetType();
			PropertyInfo[] properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
			foreach (PropertyInfo property in properties)
			{
				if (property.Name == "ApiKey" || property.Name == "UrlExtension" || property.Name == "Validators")
					continue;

				object value = property.GetValue(this);

				Validators.Validate(property.Name, type, value);

				if (value == null || value.IsNotValued())
					continue;

				propertyNameValues.Add(property.Name, value);
				string valueString = value.ToString();
				if (property.PropertyType.IsEnum)
				{
					int intValue = (int)value;
					if (intValue == 0)
					{
						continue;
					}
					else
					{
						valueString = intValue.ToString();
					}
				}
				else if (property.PropertyType == typeof(DateTime?) || property.PropertyType == typeof(DateTime))
				{
					valueString = ((DateTime)value).ToString("yyyy-MM-dd");
				}
				else if (property.PropertyType == typeof(bool))
				{
					valueString = value.ToString().ToLower();
				}

				if (property.Name == "sort_order" || property.Name == "units") 
				{
					builder.Append("&" + property.Name + "=" + value);
				}
				else
                {
					builder.Append("&" + property.Name + "=" + valueString);
				}				
			}

			Validators.Validate(propertyNameValues);

			if (Validators.ValidationErrors.Count > 0)
			{
				ValidationErrors = validators.ValidationErrors;
				return null;
			}

			return builder.ToString();
		}

		#endregion

	}

	public interface IArgumentsBase
	{
		#region properties

		Dictionary<string, string> ValidationErrors { get; }

		#endregion

	}

}
