using FRED.Api.Categories.ApiFacades;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FREDApi.UnitTests
{
	[TestClass]
	public class CategoryTests
	{
		#region fields

		private string apiKey = "";

		#endregion

		#region constructors

		public CategoryTests()
		{
			apiKey = File.ReadAllText(@"C:\Users\rod\source\ApiKey.txt");
		}

		#endregion

		#region methods

		#region category

		[TestMethod]
		public void FetchCategory()
		{
			var categoryContainer = GetCategoryApi().Fetch();

			var expectedName = "U.S. Trade & International Transactions";

			Assert.IsTrue(categoryContainer.categories.Count == 1);
			Assert.AreEqual<string>(categoryContainer.categories[0].name, expectedName);
		}

		[TestMethod]
		public async Task FetchCategoryAsync()
		{
			var categoryContainer = await GetCategoryApi().FetchAsync();

			var expectedName = "U.S. Trade & International Transactions";

			Assert.IsTrue(categoryContainer.categories.Count == 1);
			Assert.AreEqual<string>(categoryContainer.categories[0].name, expectedName);
		}

		[TestMethod]
		public void FetchCategoryJson()
		{
			var json = GetCategoryApi().FetchJson();

			var expectedJson = "{\"categories\":[{\"id\":13,\"name\":\"U.S. Trade & International Transactions\",\"parent_id\":32992}]}";

			Assert.AreEqual<string>(json, expectedJson);
		}

		[TestMethod]
		public async Task FetchCategoryJsonAsync()
		{
			var json = await GetCategoryApi().FetchJsonAsync();

			var expectedJson = "{\"categories\":[{\"id\":13,\"name\":\"U.S. Trade & International Transactions\",\"parent_id\":32992}]}";

			Assert.AreEqual<string>(json, expectedJson);
		}

		[TestMethod]
		public void FetchCategoryXml()
		{
			var xml = GetCategoryApi().FetchXml();

			var expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><categories><category id=\"13\" " +
				"name=\"U.S. Trade &amp; International Transactions\" parent_id=\"32992\"/></categories>";

			Assert.AreEqual<string>(xml, expectedXml);
		}

		[TestMethod]
		public async Task FetchCategoryXmlAsync()
		{
			var xml = await GetCategoryApi().FetchXmlAsync();

			var expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><categories><category id=\"13\" " +
				"name=\"U.S. Trade &amp; International Transactions\" parent_id=\"32992\"/></categories>";

			Assert.AreEqual<string>(xml, expectedXml);
		}

		#endregion

		#region category children

		[TestMethod]
		public void FetchCategoryChildren()
		{
			var api = GetCategoryChildrenApi();
			var categoryContainer = GetCategoryChildrenApi().Fetch();

			var errorCount = categoryContainer.categories.Count(item => item.parent_id != api.Arguments.category_id);

			Assert.IsTrue(errorCount == 0);
		}

		[TestMethod]
		public async Task FetchCategoryChildrenAsync()
		{
			var api = GetCategoryChildrenApi();
			var categoryContainer = await api.FetchAsync();

			var errorCount = categoryContainer.categories.Count(item => item.parent_id != api.Arguments.category_id);

			Assert.IsTrue(errorCount == 0);
		}

		[TestMethod]
		public void FetchCategoryChildrenJson()
		{
			var json = GetCategoryChildrenApi().FetchJson();

			var expectedJson = "{\"categories\":[{\"id\":16,\"name\":\"Exports\",\"parent_id\":13}," +
				"{\"id\":17,\"name\":\"Imports\",\"parent_id\":13},{\"id\":3000,\"name\":\"Income Payments & Receipts\",\"parent_id\":13}," +
				"{\"id\":33705,\"name\":\"International Investment Position\",\"parent_id\":13}," +
				"{\"id\":125,\"name\":\"Trade Balance\",\"parent_id\":13},{\"id\":127,\"name\":\"U.S. International Finance\",\"parent_id\":13}]}";

			Assert.AreEqual<string>(json, expectedJson);
		}

		[TestMethod]
		public async Task FetchCategoryChildrenJsonAsync()
		{
			var json = await GetCategoryChildrenApi().FetchJsonAsync();

			var expectedJson = "{\"categories\":[{\"id\":16,\"name\":\"Exports\",\"parent_id\":13}," +
				"{\"id\":17,\"name\":\"Imports\",\"parent_id\":13},{\"id\":3000,\"name\":\"Income Payments & Receipts\",\"parent_id\":13}," +
				"{\"id\":33705,\"name\":\"International Investment Position\",\"parent_id\":13}," +
				"{\"id\":125,\"name\":\"Trade Balance\",\"parent_id\":13},{\"id\":127,\"name\":\"U.S. International Finance\",\"parent_id\":13}]}";

			Assert.AreEqual<string>(json, expectedJson);
		}

		[TestMethod]
		public void FetchCategoryChildrenXml()
		{
			var xml = GetCategoryChildrenApi().FetchXml();

			var expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><categories>  " +
				"<category id=\"16\" name=\"Exports\" parent_id=\"13\"/>  " +
				"<category id=\"17\" name=\"Imports\" parent_id=\"13\"/>  " +
				"<category id=\"3000\" name=\"Income Payments &amp; Receipts\" parent_id=\"13\"/>  " +
				"<category id=\"33705\" name=\"International Investment Position\" parent_id=\"13\"/>  " +
				"<category id=\"125\" name=\"Trade Balance\" parent_id=\"13\"/>  <category id=\"127\" name=\"U.S. International Finance\" parent_id=\"13\"/>" +
				"</categories>";

			Assert.AreEqual<string>(xml, expectedXml);
		}

		[TestMethod]
		public async Task FetchCategoryChildrenXmlAsync()
		{
			var xml = await GetCategoryChildrenApi().FetchXmlAsync();

			var expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><categories>  " +
				"<category id=\"16\" name=\"Exports\" parent_id=\"13\"/>  " +
				"<category id=\"17\" name=\"Imports\" parent_id=\"13\"/>  " +
				"<category id=\"3000\" name=\"Income Payments &amp; Receipts\" parent_id=\"13\"/>  " +
				"<category id=\"33705\" name=\"International Investment Position\" parent_id=\"13\"/>  " +
				"<category id=\"125\" name=\"Trade Balance\" parent_id=\"13\"/>  <category id=\"127\" name=\"U.S. International Finance\" parent_id=\"13\"/>" +
				"</categories>";

			Assert.AreEqual<string>(xml, expectedXml);
		}

		#endregion

		#region category related tags

		[TestMethod]
		public void FetchCategoryRelatedTags()
		{
			var api = GetCategoryRelatedTagsApi();
			var tagContainer = api.Fetch();

			Assert.IsTrue(tagContainer.tags.Count > 0);
			var tagName = tagContainer.tags.FirstOrDefault(item => item.name == "bea");
			Assert.IsNotNull(tagName);
		}

		// add more here...

		#endregion

		#endregion

		#region private methods

		private Category GetCategoryApi()
		{
			var api = new Category();
			api.Arguments.ApiKey = apiKey;
			api.Arguments.category_id = 13;

			return api;
		}

		private CategoryChildren GetCategoryChildrenApi()
		{
			var api = new CategoryChildren();
			api.Arguments.ApiKey = apiKey;
			api.Arguments.category_id = 13;

			return api;
		}

		private CategoryRelatedTags GetCategoryRelatedTagsApi()
		{
			var api = new CategoryRelatedTags();
			api.Arguments.ApiKey = apiKey;
			api.Arguments.category_id = 125;
			api.Arguments.tag_names = "services;quarterly";

			return api;
		}

		#endregion

	}
}
