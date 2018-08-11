using AngularConsumer1.Configuration;
using AngularConsumer1.Configuration.Interfaces;
using FRED.Api.Categories.ApiFacades;
using FRED.Api.Sources.ApiFacades;
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
			services.AddTransient<ISources, Sources>();

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
