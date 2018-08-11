using AngularConsumer1.Core.Arguments;
using AngularConsumer1.Core.Requests;
using System;
using System.Threading.Tasks;

namespace AngularConsumer1.Core.ApiFacades
{
	/// <summary>
	/// Provides default behavior for FRED API facade classes.
	/// </summary>
	public abstract class ApiBase : IApiBase
	{
		//#region enumerations

		//public enum OutputFormats { Class, Json, XML }

		//#endregion

		#region fields

		/// <summary>
		/// The request instance used to communicate with FRED service endpoints.
		/// </summary>
		private IRequest request;

		#endregion

		#region properties

		///// <summary>
		///// The API key required by FRED for all fetches.
		///// </summary>
		//public string ApiKey { get; set; }

		///// <summary>
		///// Argument values used in a fetch. Argument names match those in the FRED API.
		///// </summary>
		//protected abstract ArgumentsBase CommonArguments
		//{
		//	get;
		//}

		/// <summary>
		/// A message describing any abnormal response from a fetch, or null for a normal response.
		/// </summary>
		public string FetchMessage { get; protected set; }

		/// <summary>
		/// Any exception not reflected in the <see cref="FetchMessage"/> property, or null when no exception occurs.
		/// </summary>
		public Exception Exception { get; protected set; }

		/// <summary>
		/// The URL used in a FRED API fetch.
		/// </summary>
		public string Url { get; protected set; }

		/// <summary>
		/// Indicates whether the API class expects JSON as the format for data returned from a fetch. If false, XML format is assumed.
		/// </summary>
		public bool Json { get; set; } = true;

		///// <summary>
		///// The requested output format.
		///// </summary>
		//public OutputFormats OutputFormat { get; set; }

		/// <summary>
		/// The request object for reteieving data from FRED.
		/// </summary>
		protected IRequest Request
		{
			get { return request = request ?? new Request(); }
		}

		#endregion

		#region constructors

		public ApiBase(IRequest request = null)
		{
			this.request = request;
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A json string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public string FetchJson()
		{
			return Fetch(json: true);
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// An XML string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public string FetchXml()
		{
			return Fetch(json: false);
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A json string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<string> FetchJsonAsync()
		{
			return await FetchAsync(json: true);
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// An XML string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<string> FetchXmlAsync()
		{
			return await FetchAsync(json: false);
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A json string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		protected string Fetch()
		{
			string container = null;
			try
			{
				//Request.Deserialize = typeof(T) != typeof(string);
				Request.Json = Json;
				container = Request.Fetch(GetArguments());
				SetResultProperties();
			}
			catch (Exception exception)
			{
				Exception = exception;
            }
			return container;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A json string containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		protected async Task<string> FetchAsync()
		{
			string container = null;
			try
			{
				//Request.Deserialize = typeof(object) != typeof(string);
				Request.Json = Json;
				container = await Request.FetchAsync(GetArguments());
				SetResultProperties();
			}
			catch (Exception exception)
			{
				Exception = exception;
			}
			return container;
		}

		protected void SetResultProperties()
		{
			Url = Request.Url;
			FetchMessage = Request.FetchMessage;
			Exception = Request.Exception;
		}

		protected abstract ArgumentsBase GetArguments();

		#endregion

		#region private methods

		private string Fetch(bool json)
		{
			bool savedJson = Json;
			Json = json;
			var result = Fetch();
			Json = savedJson;

			return result;
		}

		private async Task<string> FetchAsync(bool json)
		{
			bool savedJson = Json;
			Json = json;
			var result = await FetchAsync();
			Json = savedJson;

			return result;
		}

		#endregion

	}

	public interface IApiBase
	{
		#region properties

		string FetchMessage { get; }
		string Url { get; }

		#endregion

		#region metnods

		string FetchJson();
		string FetchXml();

		Task<string> FetchJsonAsync();
		Task<string> FetchXmlAsync();

		#endregion

	}

}
