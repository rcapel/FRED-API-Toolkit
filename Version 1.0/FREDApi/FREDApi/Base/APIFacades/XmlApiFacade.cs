using FRED.API.Base.Arguments;

namespace FRED.API.Base.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/category API endpoint. Results are returned as an XML string.
	/// </summary>
	public abstract class XmlApiFacade<TArguments> : ApiBase<TArguments, string> where TArguments : ArgumentsBase, new()
	{
		#region properties

		/// <summary>
		/// Returns false for all subclasses unless overridden, indicating that the response is not in JSON format but in XML format.
		/// </summary>
		protected override bool Json
		{
			get { return false; }
		}

		#endregion

	}
}
