using FRED.API.Base.APIFacades;
using FRED.API.Base.Arguments;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularSPA.Controllers
{
	public class FREDController : ApiController
    {
		#region public methods

		public async Task<Response<TContainer>> FetchAsync<TApi, TArguments, TContainer>(TArguments arguments)
			where TApi : ApiBase<TArguments, TContainer>, new()
			where TArguments : ArgumentsBase, new()
			where TContainer : class
		{
			TApi api = new TApi { ApiKey = ConfigurationManager.AppSettings["FREDApiKey"] };
			api.Arguments = arguments;
			TContainer container = await api.FetchAsync();
			return new Response<TContainer>
			{
				container = container,
				argumentValidationErrors = api.Arguments.ValidationErrors,
				exception = api.Exception,
				fetchMessage = api.FetchMessage,
				url = api.URL
			};
		}


		#endregion

		#region embedded types

		public class Response<TContainer>
		{
			#region properties

			public TContainer container { get; set; }
			public Dictionary<string, string> argumentValidationErrors { get; set; }
			public Exception exception { get; set; }
			public string fetchMessage { get; set; }
			public string url { get; set; }

			#endregion

		}

		#endregion

	}
}
