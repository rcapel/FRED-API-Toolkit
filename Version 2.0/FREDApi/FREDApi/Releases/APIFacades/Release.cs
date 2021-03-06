﻿using FRED.Api.Releases.Arguments;
using FRED.Api.Releases.Data;
using FRED.Api.Core.ApiFacades;
using FRED.Api.Core.Requests;
using System.Threading.Tasks;
using Newtonsoft.Json;
using FRED.Api.Core.Arguments;

namespace FRED.Api.Releases.ApiFacades
{
	/// <summary>
	/// Provides a facade for consuming the fred/release API endpoint. Results are returned in a ReleaseContainer instance.
	/// </summary>
	public class Release : ApiBase, IRelease
	{
		#region properties

		/// <summary>
		/// Argument values used in a fetch. Argument names match those in the FRED API.
		/// </summary>
		public ReleaseArguments Arguments { get; set; } = new ReleaseArguments();

		#endregion

		#region constructors

		public Release(IRequest request = null) : base(request)
		{
		}

		#endregion

		#region public methods

		/// <summary>
		/// Fetches data from a FRED service endpoint.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleaseContainer"/> containing FRED data. 
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public ReleaseContainer Fetch()
		{
			ReleaseContainer result = base.Fetch<ReleaseContainer>();

			return result;
		}

		/// <summary>
		/// Fetches data from a FRED service endpoint asynchronously.
		/// </summary>
		/// <returns>
		/// A <see cref="ReleaseContainer"/> containing FRED data.
		/// An abnormal fetch returns null and a message is available in the <see cref="FetchMessage"/> property.
		/// </returns>
		public async Task<ReleaseContainer> FetchAsync()
		{
			ReleaseContainer result = await base.FetchAsync<ReleaseContainer>();

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
	/// Defines the interface for Release types.
	/// </summary>
	public interface IRelease : IApiBase
	{
		#region properties

		ReleaseArguments Arguments { get; set; }

		#endregion

		#region public methods

		ReleaseContainer Fetch();

		Task<ReleaseContainer> FetchAsync();

		#endregion

	}

}
