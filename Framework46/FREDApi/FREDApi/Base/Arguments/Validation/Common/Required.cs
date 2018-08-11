namespace FRED.API.Base.Arguments.Validation.Common
{
	/// <summary>
	/// Provides default behavior for specific argument types that support required properties.
	/// </summary>
	public abstract class Required : PropertyValidator
	{
		#region properties

		/// <summary>
		/// The "invalid" validation message.
		/// </summary>
		public override string Message
		{
			get { return string.Format("Property '{0}' must be valued.", PropertyName); }
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Validates the instance's value.
		/// </summary>
		/// <returns>A boolean indicating whether or not the instance's value is valid.</returns>
		protected override bool Validate()
		{
			return Value != null;
		}

		#endregion

	}
}
