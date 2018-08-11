using System;
using System.Net;
using System.Threading.Tasks;

namespace AngularConsumer1.Core.Requests
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
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A null valued instance.</returns>
		protected override string InvokeService()
		{
			WebClient client = new WebClient();
			Url += Excel ? "&file_type=xls" : "&file_type=txt";
			client.DownloadFile(Url, FilePath);
			return null;
		}

		/// <summary>
		/// Fetches data asynchronously from a FRED service endpoint.
		/// </summary>
		/// <param name="arguments">The arguments used in the FRED API call.</param>
		/// <returns>A null valued instance.</returns>
		protected override async Task<string> InvokeServiceAsync()
		{
			WebClient client = new WebClient();
			Url += Excel ? "&file_type=xls" : "&file_type=txt";
			client.DownloadFile(new Uri(Url), FilePath);
			await Task.Delay(0);
			return null;
		}

		#endregion

	}
}
