using FRED.API.Base.APIFacades;
using FRED.API.Series.Arguments;
using FRED.API.Series.Data;

namespace FRED.API.Series.APIFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned in a ObservationContainer instance.
	/// </summary>
	public class SeriesObservations : ApiBase<SeriesObservationsArguments, ObservationContainer>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesObservationsJson : ApiBase<SeriesObservationsArguments, string>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesObservationsXml : XmlApiFacade<SeriesObservationsArguments>
	{
	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/observations API endpoint. Results are returned as multiple Excel spreadsheet files in ZIP format.
	/// </summary>
	public class SeriesObservationsExcel : SeriesObservationsFile
	{
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

	}

}
