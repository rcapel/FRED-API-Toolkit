using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Series.Arguments;
using System;
using System.IO;
using System.Threading.Tasks;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as multiple Excel spreadsheet files in ZIP format.
	/// </summary>
	public abstract class SeriesObservationsFile : ApiBase<SeriesObservationsArguments, object>
	{
		#region properties

		/// <summary>
		/// Returns true for all subclasses unless overridden, indicating that the response is in Excel format, not in tab-delimited text format.
		/// </summary>
		protected virtual bool Excel
		{
			get { return true; }
		}

		#endregion

		#region constructors

		public SeriesObservationsFile(IRequest request) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from the FRED series/observations service endpoint and saves the result to a ZIP file.
		/// </summary>
		/// <param name="filePath">The file path at which to save the ZIP file.</param>
		/// <param name="overwrite">Indicates whether or not to overwrite the contents of an existing ZIP file. The default is true.</param>
		/// <returns>A boolean indicating whether or not the operation succeeded.</returns>
		public bool Fetch(string filePath, bool overwrite = true)
		{
			try
			{
				if (!overwrite && File.Exists(filePath))
				{
					Exception = new Exception("File " + filePath + " already exists.");
					return false;
				}

				var request = new FileRequest { FilePath = filePath, Excel = Excel };
				Arguments.ApiKey = ApiKey;
				request.Fetch<object>(Arguments);
				SetResultProperties();
				return Exception == null;
			}
			catch (Exception exception)
			{
				Exception = exception;
			}
			return false;
		}

		/// <summary>
		/// Fetches data asynchronously from the FRED series/observations service endpoint and saves the result to a ZIP file.
		/// </summary>
		/// <param name="filePath">The file path at which to save the ZIP file.</param>
		/// <param name="overwrite">Indicates whether or not to overwrite the contents of an existing ZIP file. The default is true.</param>
		/// <returns>A Task of type Boolean, the resolution of which indicates whether or not the operation succeeded.</returns>
		public async Task<bool> FetchAsync(string filePath, bool overwrite = true)
		{
			try
			{
				if (!overwrite && File.Exists(filePath))
				{
					Exception = new Exception("File " + filePath + " already exists.");
					return false;
				}

				var request = new FileRequest { FilePath = filePath, Excel = Excel };
				Arguments.ApiKey = ApiKey;
				await request.FetchAsync<object>(Arguments);
				SetResultProperties();
				return Exception == null;
			}
			catch (Exception exception)
			{
				Exception = exception;
			}
			return false;
		}

		#endregion

	}
}
