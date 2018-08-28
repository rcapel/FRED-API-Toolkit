using AngularConsumer1.Configuration;
using AngularConsumer1.Configuration.Interfaces;
using FRED.Api.Categories.ApiFacades;
using FRED.Api.Releases.ApiFacades;
using FRED.Api.Series.ApiFacades;
using FRED.Api.Sources.ApiFacades;
using FRED.Api.Tags.ApiFacades;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AngularConsumer1
{
	public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddSingleton(Configuration);
			services.AddSingleton(new LoggerFactory()
				.AddConsole()
				.AddDebug())
				.AddLogging();
			services.AddSingleton<IAppSettings, AppSettings>();
			//services.AddSingleton<FREDHttpClient, FREDHttpClient>();
			//services.AddSingleton<IRepository, Repository>();

			services.AddTransient<ICategory, Category>();
			services.AddTransient<ICategoryChildren, CategoryChildren>();
			services.AddTransient<ICategoryRelated, CategoryRelated>();
			services.AddTransient<ICategorySeries, CategorySeries>();
			services.AddTransient<ICategoryTags, CategoryTags>();
			services.AddTransient<ICategoryRelatedTags, CategoryRelatedTags>();

			services.AddTransient<IReleases, Releases>();
			services.AddTransient<IReleasesDates, ReleasesDates>();
			services.AddTransient<IRelease, Release>();
			services.AddTransient<IReleaseDates, ReleaseDates>();
			services.AddTransient<IReleaseSeries, ReleaseSeries>();
			services.AddTransient<IReleaseSources, ReleaseSources>();
			services.AddTransient<IReleaseTags, ReleaseTags>();
			services.AddTransient<IReleaseRelatedTags, ReleaseRelatedTags>();

			services.AddTransient<ISeries, Series>();
			services.AddTransient<ISeriesCategories, SeriesCategories>();
			services.AddTransient<ISeriesObservations, SeriesObservations>();
			services.AddTransient<ISeriesRelease, SeriesRelease>();
			services.AddTransient<ISeriesSearch, SeriesSearch>();
			services.AddTransient<ISeriesSearchTags, SeriesSearchTags>();
			services.AddTransient<ISeriesSearchRelatedTags, SeriesSearchRelatedTags>();
			services.AddTransient<ISeriesTags, SeriesTags>();
			services.AddTransient<ISeriesUpdates, SeriesUpdates>();
			services.AddTransient<ISeriesVintageDates, SeriesVintageDates>();

			services.AddTransient<ISource, Source>();
			services.AddTransient<ISourceReleases, SourceReleases>();
			services.AddTransient<ISources, Sources>();

			services.AddTransient<ITags, Tags>();
			services.AddTransient<IRelatedTags, RelatedTags>();
			services.AddTransient<ITagsSeries, TagsSeries>();

			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
					//spa.Options.StartupTimeout = new System.TimeSpan(0, 0, 120);
					spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
