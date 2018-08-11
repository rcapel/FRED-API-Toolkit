namespace FRED.API.Base.Data
{
	/// <summary>
	/// Provides extended data properties for an item container.
	/// </summary>
	public class ExtendedContainer<TOrderBy> : Container
	{
		#region properties

		public TOrderBy order_by { get; set; }
		public FREDData.sort_order_values sort_order { get; set; }
		public int count { get; set; }
		public int offset { get; set; }
		public int limit { get; set; }

		#endregion

	}
}
