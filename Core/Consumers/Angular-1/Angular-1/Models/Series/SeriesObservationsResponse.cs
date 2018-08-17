using FRED.Api.Series.Data;

namespace AngularConsumer1.Models.Series
{
	public class SeriesObservationsResponse : ApiData
	{
		#region properties

		public ObservationContainer container { get; set; }

		#endregion

	}
}
