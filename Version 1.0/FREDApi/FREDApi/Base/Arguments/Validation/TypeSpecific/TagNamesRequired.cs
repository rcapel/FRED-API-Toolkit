using FRED.API.Base.Arguments.Validation.Common;
using FRED.API.Categories.Arguments;
using FRED.API.Releases.Arguments;
using FRED.API.Series.Arguments;
using FRED.API.Tags.APIFacades;
using FRED.API.Tags.Arguments;
using System;
using System.Collections.Generic;

namespace FRED.API.Base.Arguments.Validation.TypeSpecific
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
