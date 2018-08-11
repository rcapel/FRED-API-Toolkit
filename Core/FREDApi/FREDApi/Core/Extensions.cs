namespace AngularConsumer1.Core
{
	/// <summary>
	/// Provides extension methods for types.
	/// </summary>
	internal static class Extensions
	{
		#region public methods

		/// <summary>
		/// Indicates whether a string is (a) not null and (b) not empty and (c) valued with other than white space.
		/// </summary>
		/// <param name="theString">The string to test.</param>
		/// <returns>An indicator as to whether <paramref name="theString"/> is (a) not null and (b) not empty and (c) valued with other than white space.</returns>
		public static bool IsValued(this string theString)
		{
			return !string.IsNullOrEmpty(theString) && !string.IsNullOrWhiteSpace(theString);
		}

		/// <summary>
		/// Indicates the opposite of <see cref="IsValued"/>.
		/// </summary>
		/// <param name="theString">The string to test.</param>
		/// <returns>An indicator as to whether the opposite of <see cref="IsValued"/> is true.</returns>
		public static bool IsNotValued(this string theString)
		{
			return !IsValued(theString);
		}

		/// <summary>
		/// Indicates whether an object is (a) not null and, as a string, (b) not empty and (c) valued with other than white space.
		/// </summary>
		/// <param name="theObject">The object to test.</param>
		/// <returns>An indicator as to whether <paramref name="theObject"/> is (a) not null and, as a string, (b) not empty and (c) valued with other than white space.</returns>
		public static bool IsValued(this object theObject)
		{
			return theObject != null && IsValued(theObject.ToString());
		}

		/// <summary>
		/// Indicates the opposite of <see cref="IsValued"/>.
		/// </summary>
		/// <param name="theObject">The object to test.</param>
		/// <returns>An indicator as to whether the opposite of <see cref="IsValued"/> is true.</returns>
		public static bool IsNotValued(this object theObject)
		{
			return !IsValued(theObject);
		}

		/// <summary>
		/// Indicates whether an integer is inclusively between two values.
		/// </summary>
		/// <param name="theInt">The integer to test.</param>
		/// <param name="minimum">The minimum value in the inclusive range.</param>
		/// <param name="maximum">The maximum value in the inclusive range.</param>
		/// <returns>An indicator as to whether an integer is inclusively between <paramref name="minimum"/> and <paramref name="maximum"/>.</returns>
		public static bool IsBetween(this int theInt, int minimum, int maximum)
		{
			return theInt >= minimum && theInt <= maximum;
		}

		#endregion

	}
}
