using FRED.API.Base.Arguments;
using FRED.API.Base.Requests;
using System;
using System.Threading.Tasks;

namespace FRED.API.Base.APIFacades
{
	/// <summary>
	/// Provides default behavior for FRED API facade classes.
	/// </summary>
	/// <typeparam name="TArguments">The type of arguments the API class uses for fetches.</typeparam>
	/// <typeparam name="TContainer">The type of container, containing fetch results, that the API class returns.</typeparam>
	public abstract class ApiBase<TArguments, TContainer> : IApiKeyed
		where TArguments : ArgumentsBase, new() 
		where TContainer : class
	{
		#region properties

		/// <summary>
		/// The request instance used to communicate with FRED service endpoints.
		/// </summary>
		protected Request Request { get; set; }

		/// <summary>
		/// Indicates whether the API class expects JSON as the format for data returned from a fetch. If false, XML format is assumed.
		/// Subclasses should override this property as appropriate.
		/// </summary>
		protected virtual bool Json
		{
			get { return true; }
		}

		/// <summary>
		/// The URL used in a FRED API fetch.
		/// </summary>
		public string URL { get; protected set; }

		#endregion

		#region properties

		/// <summary>
		/// The API key required by FRED for all fetches.
		/// </summary>
		public string ApiKey { get; set; }

		private TArguments arguments = new TArguments();
		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public TArguments Arguments
		{
			get { return arguments; }
			set { arguments = value; }
		}

		/// <summary>
		/// A message describing any abnormal response from a fetch, or null for a normal response.
		/// </summary>
		public string FetchMessage { get; protected set; }

		/// <summary>
		/// Any exception not reflected in the <see cref="FetchMessage"/> property, or null when no exception occurs.
		/// </summary>
		public Exception Exception { get; protected set; }

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// An object containing FRED data, the type of which is determined by TContainer. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public virtual TContainer Fetch()
		{
			TContainer container = null;
            try
			{
				Request = new Request();
				Arguments.ApiKey = ApiKey;
				Request.Deserialize = typeof(TContainer) != typeof(string);
				Request.Json = Json;
				container = Request.Fetch<TContainer>(Arguments);
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
		/// A task that ultimately returns an object containing FRED data, the type of which is determined by this instance.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<TContainer> FetchAsync()
		{
			TContainer container = null;
			try
			{
				Request = new Request();
				Arguments.ApiKey = ApiKey;
				Request.Deserialize = typeof(TContainer) != typeof(string);
				Request.Json = Json;
				container = await Request.FetchAsync<TContainer>(Arguments);
				SetResultProperties();
			}
			catch (Exception exception)
			{
				Exception = exception;
			}
			return container;
		}

		#endregion

		#region protected methods

		protected void SetResultProperties()
		{
			URL = Request.URL;
			FetchMessage = Request.FetchMessage;
			Exception = Request.Exception;
		}

		#endregion

	}
}
