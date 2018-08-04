using System;
using System.Net;
using System.Threading.Tasks;

namespace FRED.Api.Core.Requests
{
	/// <summary>
	/// Provides behavior for communicating with FRED service endpoints that return a file.
	/// </summary>
	internal class FileRequest : Request
	{
		#region properties

		/// <summary>
		/// The file system path, including file name, identifying the location where the response file will be saved.
		/// </summary>
		public string FilePath { get; set; }

		/// <summary>
		/// Indicates whether this instance expects Excel as the format for data returned from a fetch. 
		/// False indicates that this instance expects tab-delimited text as the format.
		/// </summary>
		public bool Excel { get; set; }

		#endregion

		#region protected methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <typeparam name="T">The type of container, containing fetch results, that this instance returns.
		/// This type can be any class, since its return value will be null.</typeparam>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A null valued instance.</returns>
		protected override T InvokeService<T>()
		{
			T result = default(T);
			WebClient client = new WebClient();
			Url += Excel ? "&file_type=xls" : "&file_type=txt";
			client.DownloadFile(Url, FilePath);
			return result;
		}

		protected override async Task<T> InvokeServiceAsync<T>()
		{
			T result = default(T);
			WebClient client = new WebClient();
			Url += Excel ? "&file_type=xls" : "&file_type=txt";
			client.DownloadFile(new Uri(Url), FilePath);
			await Task.Delay(0);
			return result;
		}

		#endregion

	}
}
