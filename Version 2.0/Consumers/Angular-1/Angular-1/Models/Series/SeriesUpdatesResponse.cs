using FRED.Api.Series.Data;

namespace AngularConsumer1.Models.Series
{
	public class SeriesUpdatesResponse : ApiData
	{
		#region properties

		public SeriesUpdateContainer container { get; set; }

		#endregion

	}
}
