using System.Collections.Generic;

namespace AngularConsumer1.Core.Arguments.Validation.Dependencies
{
	/// <summary>
	/// Provides behavior for specific argument types that support cross property validation between "tag_names" and "exclude_tag_names".
	/// </summary>
	public class TagNamesAndExcludeTagsNames : DependencyValidator
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "tag_names", "exclude_tag_names" };
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
			get { return string.Format("When property 'exclude_tag_names' is valued, property 'tag_names' must also be valued."); }
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Validates the instance's value.
		/// </summary>
		/// <returns>A boolean indicating whether or not the instance's value is valid.</returns>
		protected override bool Validate()
		{
			return Values[1].IsNotValued() || Values[0].IsValued();
		}

		#endregion

	}
}
