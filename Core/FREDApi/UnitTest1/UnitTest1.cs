using FRED.Api.Categories.ApiFacades;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace UnitTest1
{
	[TestClass]
    public class UnitTest1
    {
		#region fields

		private string apiKey = "2bb51ce5cf297e0a999c232d8b6238e5";

		#endregion

		[TestMethod]
		public async Task FetchCategory()
		{
			var api = new Category() { ApiKey = apiKey };
			api.Arguments.category_id = 13;
			var categoryContainer = await api.FetchAsync();

			var expectedName = "U.S. Trade & International Transactions";

			Assert.IsTrue(categoryContainer.Categories.Count == 1);
			Assert.AreEqual<string>(expectedName, categoryContainer.Categories[0].name);
		}

	}
}
