using System.Collections.Generic;

namespace AngularConsumer1.Models
{
	public class ApiData
    {
		#region properties

		public List<KeyValuePair<string, string>> ArgumentValidationErrors { get; set; }
		public string FetchMessage { get; set; }
		public string Url { get; set; }


		#endregion

	}
}
