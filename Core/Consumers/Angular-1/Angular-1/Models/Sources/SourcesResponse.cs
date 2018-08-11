using FRED.Api.Sources.Data;

namespace FRED.Api.Models.Sources
{
	public class SourcesResponse : ApiData
	{
		#region properties

		public SourcesContainer container { get; set; }

		#endregion

	}
}
