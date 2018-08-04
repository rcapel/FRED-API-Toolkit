using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned in a ObservationContainer instance.
	/// </summary>
	public class SeriesObservations : ApiBase<SeriesObservationsArguments, ObservationContainer>
	{
		#region constructors

		public SeriesObservations(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesObservationsJson : ApiBase<SeriesObservationsArguments, string>
	{
		#region constructors

		public SeriesObservationsJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesObservationsXml : XmlApiFacade<SeriesObservationsArguments>
	{
		#region constructors

		public SeriesObservationsXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as multiple Excel spreadsheet files in ZIP format.
	/// </summary>
	public class SeriesObservationsExcel : SeriesObservationsFile
	{
		#region constructors

		public SeriesObservationsExcel(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as multiple Excel spreadsheet files in ZIP format.
	/// </summary>
	public class SeriesObservationsText : SeriesObservationsFile
	{
		#region properties

		/// <summary>
		/// Returns false, indicating that the response is not in Excel format, not rather in tab-delimited text format.
		/// </summary>
		protected override bool Excel
		{
			get { return false; }
		}

		#endregion

		#region constructors

		public SeriesObservationsText(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
