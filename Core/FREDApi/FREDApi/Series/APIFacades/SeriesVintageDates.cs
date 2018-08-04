using FRED.Api.Series.Arguments;
using FRED.Api.Series.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;

namespace FRED.Api.Series.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned in a VintageDateContainer instance.
	/// </summary>
	public class SeriesVintageDates : ApiBase<SeriesVintageDatesArguments, VintageDateContainer>
	{
		#region constructors

		public SeriesVintageDates(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned as a JSON string.
	/// </summary>
	public class SeriesVintageDatesJson : ApiBase<SeriesVintageDatesArguments, string>
	{
		#region constructors

		public SeriesVintageDatesJson(IRequest request) : base(request)
		{
		}

		#endregion

	}

	/// <summary>
	/// Provides a facade for consuming the fred/series/vintagedates API endpoint. Results are returned as an XML string.
	/// </summary>
	public class SeriesVintageDatesXml : XmlApiFacade<SeriesVintageDatesArguments>
	{
		#region constructors

		public SeriesVintageDatesXml(IRequest request) : base(request)
		{
		}

		#endregion

	}

}
