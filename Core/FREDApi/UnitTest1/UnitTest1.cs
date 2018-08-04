using FRED.Api.Categories.ApiFacades;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace UnitTest1
{
	[TestClass]
    public class UnitTest1
    {
		#region fields

		private string apiKey = "";

		#endregion

		[TestMethod]
		public void FetchCategory()
		{
			var api = new Category() { ApiKey = apiKey };
			api.Arguments.category_id = 13;
			var categoryContainer = api.Fetch();

			var expectedName = "U.S. Trade & International Transactions";

			Assert.IsTrue(categoryContainer.Categories.Count == 1);
			Assert.AreEqual<string>(expectedName, categoryContainer.Categories[0].name);
		}

		[TestMethod]
		public async Task FetchCategoryAsync()
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
