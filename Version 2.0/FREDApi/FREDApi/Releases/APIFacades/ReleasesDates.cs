﻿using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using Newtonsoft.Json;
using System.Threading.Tasks;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/releases/dates API endpoint. Results are returned in a ReleasesDateContainer instance.
	/// </summary>
	public class ReleasesDates : ApiBase, IReleasesDates
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleasesDatesArguments Arguments { get; set; } = new ReleasesDatesArguments();

		#endregion

		#region constructors

		public ReleasesDates(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleasesDateContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public ReleasesDateContainer Fetch()
		{
			ReleasesDateContainer result = base.Fetch<ReleasesDateContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleasesDateContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<ReleasesDateContainer> FetchAsync()
		{
			ReleasesDateContainer result = await base.FetchAsync<ReleasesDateContainer>();

			return result;
		}

		/// <summary>
		/// Returns the arguments for the instance.
		/// </summary>
		/// <returns>The arguments for the instance.</returns>
		public override ArgumentsBase GetArguments()
		{
			return Arguments;
		}

		#endregion

	}

	/// <summary>
	/// Defines the interface for ReleasesDates types.
	/// </summary>
	public interface IReleasesDates : IApiBase
	{
		#region properties

		ReleasesDatesArguments Arguments { get; set; }

		#endregion

		#region public methods

		ReleasesDateContainer Fetch();

		Task<ReleasesDateContainer> FetchAsync();

		#endregion

	}

}
