using AngularConsumer1.Core.Arguments.Validation.Common;
using AngularConsumer1.Categories.Arguments;
using AngularConsumer1.Releases.Arguments;
using AngularConsumer1.Series.Arguments;
using AngularConsumer1.Tags.ApiFacades;
using AngularConsumer1.Tags.Arguments;
using System;
using System.Collections.Generic;

namespace AngularConsumer1.Core.Arguments.Validation.TypeSpecific
{
	/// <summary>
	/// Provides behavior for specific argument types that support the required "tag_names" property.
	/// </summary>
	public class TagNamesRequired : Required
	{
		#region properties

		private static readonly List<string> supportedPropertyNames = new List<string> { "tag_names" };
		/// <summary>
		/// A list of property names supported by this class.
		/// </summary>
		protected override List<string> SupportedPropertyNames
		{
			get { return supportedPropertyNames; }
		}

		private static readonly List<Type> supportedTypes = new List<Type>
		{
			typeof(CategoryRelatedTagsArguments),
			typeof(ReleaseRelatedTagsArguments),
			typeof(SeriesSearchRelatedTagsArguments),
			typeof(RelatedTagsArguments),
			typeof(TagsSeriesArguments)
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
