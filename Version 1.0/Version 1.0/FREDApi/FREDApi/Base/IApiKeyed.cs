namespace FRED.API.Base
{
	/// <summary>
	/// Defines interface properties for types that require a FRED API key.
	/// </summary>
	public interface IApiKeyed
	{
		#region properties

		/// <summary>
		/// FRED API key.
		/// </summary>
		string ApiKey { get; set; }

		#endregion

	}
}
