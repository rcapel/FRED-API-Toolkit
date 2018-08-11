namespace FRED.API.Base
{
	/// <summary>
	/// Provides a common source for well-known FRED data points.
	/// </summary>
	public static class FREDData
	{
		#region enumerations

		public enum sort_order_values { asc, desc }
		public enum filter_variable_values { frequency, units, seasonal_adjustment }
		public enum filter_value_values { all, macro, regional }
		public enum tag_group_id_values { freq, gen, geo, geot, rls, seas, src }

		public enum series_order_by_values { series_id, title, units, frequency, seasonal_adjustment, realtime_start, realtime_end, last_updated, observation_start, observation_end, popularity }
		public enum series_search_order_by_values { search_rank, series_id, title, units, frequency, seasonal_adjustment, realtime_start, realtime_end, last_updated, observation_start, observation_end, popularity }
		public enum sources_order_by_values { source_id, name, realtime_start, realtime_end }
		public enum tags_order_by_values { series_count, popularity, created, name, group_id }
		public enum releases_order_by_values { release_id, name, press_release, realtime_start, realtime_end }
		public enum releases_dates_order_by_values { release_date, release_id, release_name }
		public enum vintage_date_order_by_values { vintage_date }
		public enum observation_order_by_values { observation_date }

		public enum units_values { lin, chg, ch1, pch, pc1, pca, cch, cca, log }
		public enum frequency_values { d, w, bw, m, q, sa, a, wef, weth, wew, wetu, wem, wesu, wesa, bwew, bwem }
		public enum aggregation_method_values { avg, sum, eop }
		public enum output_type_values { RealTimePeriod = 1, VintageDateAll, VintageDateNewAndRevised, InitialRelease }
		public enum search_type_values { full_text, series_id }

		#endregion

	}
}
