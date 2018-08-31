using AngularConsumer1.Models;
using FRED.Api.Core.ApiFacades;
using System.Collections.Generic;

namespace AngularConsumer1.Controllers
{
	/// <summary>
	/// Provides behavior common among controllers.
	/// </summary>
	public class ControllerCommon : IControllerCommon
	{
		#region public methods

		/// <summary>
		/// Sets api values in a result object. 
		/// </summary>
		/// <param name="api">The object containing api values.</param>
		/// <param name="validationErrors">Validation errors from an api call.</param>
		/// <param name="result">The object in which the values are set.</param>
		public void SetApiValues(IApiBase api, IDictionary<string, string> validationErrors, ApiData result)
		{
			if (validationErrors != null)
			{
				result.ArgumentValidationErrors = new List<KeyValuePair<string, string>>();
				foreach (var error in validationErrors)
				{
					result.ArgumentValidationErrors.Add(new KeyValuePair<string, string>(error.Key, error.Value));
				}
			}
			result.FetchMessage = api.FetchMessage;
			result.Url = api.Url;
		}

		#endregion

	}

	/// <summary>
	/// Defines the interface for ControllerCommon.
	/// </summary>
	public interface IControllerCommon
	{
		#region public methods

		void SetApiValues(IApiBase api, IDictionary<string, string> validationErrors, ApiData result);

		#endregion

	}

}
