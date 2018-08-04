using FRED.Api.Core.Arguments;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Xml;

namespace FRED.Api.Core.Requests
{
	/// <summary>
	/// Provides behavior for communicating with FRED service endpoints.
	/// </summary>
	public class Request : IRequest
    {
		#region properties

		/// <summary>
		/// Indicates whether this instance will attempt to deserialize JSON returned from a fetch.
		/// </summary>
		public bool Deserialize { get; set; }

		/// <summary>
		/// Indicates whether this instance expects JSON as the format for data returned from a fetch. 
		/// False indicates that this instance expects XML as the format.
		/// </summary>
		public bool Json { get; set; }

		/// <summary>
		/// The URL used in a FRED API fetch.
		/// </summary>
		public string Url { get; protected set; }

		/// <summary>
		/// Any message returned by the FRED API.
		/// </summary>
		public string FetchMessage { get; private set; }

		/// <summary>
		/// Any exception not reflected in the <see cref="FetchMessage"/> property, or null when no exception occurs.
		/// </summary>
		public Exception Exception { get; private set; }

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.</typeparam>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A container of type <paramref name="T"/> containing fetch results.</returns>
		public T Fetch<T>(ArgumentsBase arguments) where T : class
		{
			T result = default(T);

			Url = BuildUrl(arguments);
			if (Url == null)
				return result;

			try
			{
				result = InvokeService<T>();
			}
			catch (WebException exception)
			{
				HandleException(exception, Json || Deserialize);
			}

			return result;
		}

		/// <summary>
		/// Fetches data asynchronously from a FRED service endpoint.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.</typeparam>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A Task of type <paramref name="T"/>, the resolution of which is a container of fetch results.</returns>
		public async Task<T> FetchAsync<T>(ArgumentsBase arguments) where T : class
		{
			T result = default(T);

			Url = BuildUrl(arguments);
			if (Url == null)
				return result;

			try
			{
				result = await InvokeServiceAsync<T>();
			}
			catch (WebException exception)
			{
				HandleException(exception, Json || Deserialize);
			}

			return result;
		}

		#endregion

		#region protected methods

		/// <summary>
		/// Invoke the actual FRED API endpoint. Subclasses can override this template method to provide specialized behavior.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.</typeparam>
		/// <returns>A container of type <paramref name="T"/> containing fetch results.</returns>
		protected virtual T InvokeService<T>() where T : class
		{
			WebRequest request = WebRequest.Create(Url);
			request.Credentials = CredentialCache.DefaultCredentials;
			using (WebResponse response = request.GetResponse())
			{
				return BuildResult<T>(response);
			}
		}

		protected virtual async Task<T> InvokeServiceAsync<T>() where T : class
		{
			WebRequest request = WebRequest.Create(Url);
			request.Credentials = CredentialCache.DefaultCredentials;
			using (WebResponse response = await request.GetResponseAsync())
			{
				return BuildResult<T>(response);
			}
		}

		#endregion

		#region private methods

		private string BuildUrl(ArgumentsBase arguments)
		{
			string stringifiedArguments = arguments.Stringify();
			if (stringifiedArguments == null)
				return null;

			string fileType = Json || Deserialize ? "&file_type=json" : null;
			string url = string.Format("https://api.stlouisfed.org/fred/{0}?{1}{2}", arguments.UrlExtension, stringifiedArguments, fileType);
			return url;
		}

		private T BuildResult<T>(WebResponse response) where T : class
		{
			T result = default(T);
			string responseString = null;
            using (Stream responseStream = response.GetResponseStream())
			{
				StreamReader reader = new StreamReader(responseStream);
				responseString = reader.ReadToEnd();
			}
			result = Deserialize ? JsonConvert.DeserializeObject<T>(responseString) : responseString as T;
			return result;
		}

		/// <summary>
		/// Handles exceptions from FRED API service calls.
		/// </summary>
		/// <param name="exception">The exception.</param>
		/// <param name="isJson">Indicates whether the exception is in JSON format. False indicates XML format.</param>
		private void HandleException(WebException exception, bool isJson)
		{
			try
			{
				Stream stream = exception.Response.GetResponseStream();
				byte[] buffer = new byte[stream.Length];
				stream.Read(buffer, 0, buffer.Length);
				string text = System.Text.Encoding.UTF8.GetString(buffer, 0, buffer.Length);
				string errorMessage = null;
				if (isJson)
				{
					Error error = JsonConvert.DeserializeObject<Error>(text);
					errorMessage = error.error_message;
				}
				else
				{
					XmlDocument document = new XmlDocument();
					document.LoadXml(text);
					XmlNode node = document.SelectSingleNode("//error/@message");
					errorMessage = node == null ? null : node.InnerText;
                }
				FetchMessage = errorMessage;
			}
			catch
			{
				Exception = exception;
			}
		}

		#endregion

		#region embedded types

		/// <summary>
		/// Provides a container for JSON error messages from the FRED API.
		/// </summary>
		private class Error
		{
			public string error_code { get; set; }
			public string error_message { get; set; }
		}

		#endregion

	}

}
