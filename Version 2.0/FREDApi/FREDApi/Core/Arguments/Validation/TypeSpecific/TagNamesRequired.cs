using FRED.Api.Core.Arguments.Validation.Common;
using FRED.Api.Categories.Arguments;
using FRED.Api.Releases.Arguments;
using FRED.Api.Series.Arguments;
using FRED.Api.Tags.ApiFacades;
using FRED.Api.Tags.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.Api.Core.Arguments.Validation.TypeSpecific
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
