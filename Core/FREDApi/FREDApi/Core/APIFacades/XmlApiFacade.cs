using FRED.Api.Core.Arguments;
using FRED.Api.Core.Requests;

namespace FRED.Api.Core.ApiFacades
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

		#region constructors

		public XmlApiFacade(IRequest request) : base(request)
		{
		}

		#endregion

	}
}
