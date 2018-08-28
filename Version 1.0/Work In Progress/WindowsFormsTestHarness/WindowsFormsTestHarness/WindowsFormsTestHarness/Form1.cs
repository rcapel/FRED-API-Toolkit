using FRED.API.Base.APIFacades;
using FRED.API.Base.Arguments;
using FRED.API.Categories.APIFacades;
using FRED.API.Categories.Data;
using FRED.API.Releases.APIFacades;
using FRED.API.Releases.Data;
using FRED.API.Series.APIFacades;
using FRED.API.Series.Data;
using FRED.API.Sources.APIFacades;
using FRED.API.Sources.Data;
using FRED.API.Tags.APIFacades;
using FRED.API.Tags.Data;
using System;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsTestHarness
{
	public partial class Form1 : Form
	{
		private static string apiKey = "";

		public Form1()
		{
			InitializeComponent();
		}

		#region categories

		private async void categories_categoryButton_Click(object sender, EventArgs e)
		{
			Category api = new Category { ApiKey = apiKey };
			api.Arguments.category_id = 125;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			CategoryContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void categories_categoryChildrenButton_Click(object sender, EventArgs e)
		{
			CategoryChildren api = new CategoryChildren { ApiKey = apiKey };
			api.Arguments.category_id = 13;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			CategoryContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void categories_categoryRelatedButton_Click(object sender, EventArgs e)
		{
			CategoryRelated api = new CategoryRelated { ApiKey = apiKey };
			api.Arguments.category_id = 32073;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			CategoryContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void categories_categorySeriesButton_Click(object sender, EventArgs e)
		{
			CategorySeries api = new CategorySeries { ApiKey = apiKey };
			api.Arguments.category_id = 125;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SeriesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void categories_categoryTagsButton_Click(object sender, EventArgs e)
		{
			CategoryTags api = new CategoryTags { ApiKey = apiKey };
			api.Arguments.category_id = 125;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void categories_categoryRelatedTagsButton_Click(object sender, EventArgs e)
		{
			CategoryRelatedTags api = new CategoryRelatedTags { ApiKey = apiKey };
			api.Arguments.category_id = 125;
			api.Arguments.tag_names = "services;quarterly";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		#endregion

		#region releases

		private async void releases_releasesButton_Click(object sender, EventArgs e)
		{
			Releases api = new Releases { ApiKey = apiKey };
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ReleasesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releasesDatesButton_Click(object sender, EventArgs e)
		{
			ReleasesDates api = new ReleasesDates { ApiKey = apiKey };
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ReleasesDateContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseButton_Click(object sender, EventArgs e)
		{
			Release api = new Release { ApiKey = apiKey };
			api.Arguments.release_id = 53;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ReleaseContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseDatesButton_Click(object sender, EventArgs e)
		{
			ReleaseDates api = new ReleaseDates { ApiKey = apiKey };
			api.Arguments.release_id = 82;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ReleaseDateContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseSeriesButton_Click(object sender, EventArgs e)
		{
			ReleaseSeries api = new ReleaseSeries { ApiKey = apiKey };
			api.Arguments.release_id = 51;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SeriesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseSourcesButton_Click(object sender, EventArgs e)
		{
			ReleaseSources api = new ReleaseSources { ApiKey = apiKey };
			api.Arguments.release_id = 51;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SourceContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseTagsButton_Click(object sender, EventArgs e)
		{
			ReleaseTags api = new ReleaseTags { ApiKey = apiKey };
			api.Arguments.release_id = 86;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void releases_releaseRelatedTagsButton_Click(object sender, EventArgs e)
		{
			ReleaseRelatedTags api = new ReleaseRelatedTags { ApiKey = apiKey };
			api.Arguments.release_id = 86;
			api.Arguments.tag_names = "sa;foreign";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		#endregion

		#region series

		private async void series_seriesButton_Click(object sender, EventArgs e)
		{
			Series api = new Series { ApiKey = apiKey };
			api.Arguments.series_id = "GNPCA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SingleSeriesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesCategoriesButton_Click(object sender, EventArgs e)
		{
			SeriesCategories api = new SeriesCategories { ApiKey = apiKey };
			api.Arguments.series_id = "EXJPUS";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			CategoryContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesObservationsButton_Click(object sender, EventArgs e)
		{
			SeriesObservations api = new SeriesObservations { ApiKey = apiKey };
			api.Arguments.series_id = "GNPCA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ObservationContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesObservationsTextButton_Click(object sender, EventArgs e)
		{
			SeriesObservationsText api = new SeriesObservationsText { ApiKey = apiKey };
			api.Arguments.series_id = "GNPCA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			string filename = @"C:\Users\Who\Desktop\ObservationsText.zip";
			bool success = syncButton.Checked ? api.Fetch(filename, false) : await api.FetchAsync(filename);
			ShowResults(api);
		}

		private async void series_seriesObservationExcelButton_Click(object sender, EventArgs e)
		{
			SeriesObservationsExcel api = new SeriesObservationsExcel { ApiKey = apiKey };
			api.Arguments.series_id = "GNPCA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			string filename = @"C:\Users\Who\Desktop\ObservationsExcel.zip";
			bool success = syncButton.Checked ? api.Fetch(filename, false) : await api.FetchAsync(filename);
			ShowResults(api);
		}

		private async void series_seriesReleaseButton_Click(object sender, EventArgs e)
		{
			SeriesRelease api = new SeriesRelease { ApiKey = apiKey };
			api.Arguments.series_id = "IRA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			ReleaseContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesSearchButton_Click(object sender, EventArgs e)
		{
			SeriesSearch api = new SeriesSearch { ApiKey = apiKey };
			api.Arguments.search_text = "monetary+service+index";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SeriesSearchContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesSearchTagsButton_Click(object sender, EventArgs e)
		{
			SeriesSearchTags api = new SeriesSearchTags { ApiKey = apiKey };
			api.Arguments.series_search_text = "monetary+service+index";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesSearchRelatedTagsButton_Click(object sender, EventArgs e)
		{
			SeriesSearchRelatedTags api = new SeriesSearchRelatedTags { ApiKey = apiKey };
			api.Arguments.series_search_text = "mortgage+rate";
			api.Arguments.tag_names = "30-year;frb";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesTagsButton_Click(object sender, EventArgs e)
		{
			SeriesTags api = new SeriesTags { ApiKey = apiKey };
			api.Arguments.series_id = "STLFSI";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriseUpdatesButton_Click(object sender, EventArgs e)
		{
			SeriesUpdates api = new SeriesUpdates { ApiKey = apiKey };
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SeriesUpdateContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void series_seriesVintageDatesButton_Click(object sender, EventArgs e)
		{
			SeriesVintageDates api = new SeriesVintageDates { ApiKey = apiKey };
			api.Arguments.series_id = "GNPCA";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			VintageDateContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		#endregion

		#region sources

		private async void sources_sourcesButton_Click(object sender, EventArgs e)
		{
			Sources api = new Sources() { ApiKey = apiKey };
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SourcesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void sources_sourceButton_Click(object sender, EventArgs e)
		{
			Source api = new Source() { ApiKey = apiKey };
			api.Arguments.source_id = 1;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SourceContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void sources_sourceReleasesButton_Click(object sender, EventArgs e)
		{
			SourceReleases api = new SourceReleases() { ApiKey = apiKey };
			api.Arguments.source_id = 1;
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			SourceReleasesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		#endregion

		#region tags

		private async void tags_tagsButton_Click(object sender, EventArgs e)
		{
			Tags api = new Tags() { ApiKey = apiKey };
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void tags_relatedTagsButton_Click(object sender, EventArgs e)
		{
			RelatedTags api = new RelatedTags() { ApiKey = apiKey };
			api.Arguments.tag_names = "monetary+aggregates;weekly";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		private async void tags_tagsSeriesButton_Click(object sender, EventArgs e)
		{
			TagsSeries api = new TagsSeries() { ApiKey = apiKey };
			api.Arguments.tag_names = "slovenia;food;oecd";
			if (fredValidationButton.Checked)
			{
				api.Arguments.Validators.Clear();
			}
			TagSeriesContainer container = syncButton.Checked ? api.Fetch() : await api.FetchAsync();
			ShowResults(api);
		}

		#endregion

		private void ShowResults<TArguments, TContainer>(ApiBase<TArguments, TContainer> api)
			where TArguments : ArgumentsBase, new()
			where TContainer : class
		{
			StringBuilder builder = new StringBuilder();
			builder.Append("Exception: " + api.Exception + Environment.NewLine);
			builder.Append("FetchMessage: " + api.FetchMessage + Environment.NewLine);
			builder.Append("URL: " + api.URL + Environment.NewLine);
			builder.Append("Arguments.Validators.Count: " + api.Arguments.Validators.Count.ToString() + Environment.NewLine);
			if (api.Arguments.ValidationErrors != null)
			{
				builder.Append("Arguments.ValidationErrors: ");
				foreach (string error in api.Arguments.ValidationErrors.Values)
				{
					builder.Append("Error: " + error + Environment.NewLine);
				}
			}
			MessageBox.Show(builder.ToString());
		}

	}

}
