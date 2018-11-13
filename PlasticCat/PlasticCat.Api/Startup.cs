﻿[assembly: Microsoft.Owin.OwinStartup(typeof(PlasticCat.Api.Startup))]
namespace PlasticCat.Api
{
    using Autofac;
    using Autofac.Integration.WebApi;
    using Microsoft.Owin;
    using Microsoft.Owin.Cors;
    using Microsoft.Owin.Extensions;
    using Microsoft.Owin.FileSystems;
    using Microsoft.Owin.StaticFiles;
    using Newtonsoft.Json.Serialization;
    using Owin;
    using System;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Net.Http.Headers;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;
    using System.Web.Cors;
    using System.Web.Http;

    public class Startup
    {
        private static readonly Regex File = new Regex(
           @"(?i)\.[a-z0-9]+(\?\S+)?$",
           RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Singleline);

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1822:MarkMembersAsStatic", Justification = "Startup class")]
        public void Configuration(IAppBuilder app)
        {
            var wwwroot = Path.Combine(
                AppDomain.CurrentDomain.BaseDirectory,
                "wwwroot");
            AutofacInitializer.Initialize();
            var configurator = Configure(wwwroot, AutofacInitializer.AutofacContainer);
            configurator(app);            
        }

        public static Action<IAppBuilder> Configure(string wwwroot, IContainer container)
        {
            return app =>
            {
                if (AppSettings.ShowErrorPage)
                {
                    app.UseErrorPage();
                }

                app.UseAutofacMiddleware(container);
                var config = SetHttpConfiguration(container);
                config.MapHttpAttributeRoutes();
                ConfigureCors(app);
                ConfigureApiService(app, config);
                ConfigureWebPages(app, wwwroot);

                app.UseStageMarker(PipelineStage.MapHandler);
            };
        }

        private static void ConfigureCors(IAppBuilder app)
        {
            if (AppSettings.CorsEnabled)
            {
                app.UseCors(GetCorsOptions());
            }
        }

        private static void ConfigureApiService(IAppBuilder app, HttpConfiguration httpConfiguration)
        {
            app.Map($"/{AppSettings.ApiPrefix}", pipeline =>
            {
                pipeline.UseWebApi(httpConfiguration);
            });
        }

        private static void ConfigureWebPages(IAppBuilder app, string wwwroot)
        {
            var appBaseUrl = string.IsNullOrEmpty(AppSettings.AppBaseUrl) ? "app" : AppSettings.AppBaseUrl;

            app.Map($"/{appBaseUrl}", pipeline =>
            {
                pipeline.Use((context, next) =>
                {
                    var path = context.Request.PathBase.ToString();

                    return SendHtmlFile(
                        context,
                        path.Substring(0, path.LastIndexOf(appBaseUrl, StringComparison.OrdinalIgnoreCase)),
                        Path.Combine(wwwroot, AppSettings.DefaultPage));
                });
            });

            app.Map($"/{AppSettings.AppErrorUrl}", pipeline =>
            {
                pipeline.Use((context, next) =>
                {
                    var path = context.Request.PathBase.ToString();

                    return SendHtmlFile(
                        context,
                        path.Substring(0, path.LastIndexOf(AppSettings.AppErrorUrl, StringComparison.OrdinalIgnoreCase)),
                        Path.Combine(wwwroot, AppSettings.ErrorPage));
                });
            });

            // Serve resources from root folder if they exists
            app.UseFileServer(new FileServerOptions
            {
                RequestPath = PathString.Empty,
                FileSystem = new PhysicalFileSystem(wwwroot),
                EnableDirectoryBrowsing = false,
                EnableDefaultFiles = false,
                StaticFileOptions =
                {
                    ServeUnknownFileTypes = true
                }
            });

            // Everything else goes to index.html or 404 if it matches file pattern
            app.Use((context, next) =>
            {
                var isFile = File.IsMatch(context.Request.Path.Value.TrimStart('/'));

                return SendHtmlFile(
                    context,
                    context.Request.PathBase.ToString(),
                    Path.Combine(wwwroot, isFile ? AppSettings.ErrorPage : AppSettings.DefaultPage),
                    isFile ? HttpStatusCode.NotFound : HttpStatusCode.OK);
            });
        }

        private static Task SendHtmlFile(
            IOwinContext context,
            string originBasePath,
            string filePath,
            HttpStatusCode statusCode = HttpStatusCode.OK)
        {
            var basePath = originBasePath.Trim('/') + "/";

            string appSettings;

            try
            {
                appSettings = SettingsHelper.LoadAppSettings(basePath, context.Request);
            }
            catch (WebException)
            {
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return context.Response.WriteAsync(HttpStatusCode.InternalServerError.ToString());
            }

            var body = System.IO.File
                .ReadAllText(filePath)
                .Replace("</head>", $"<script id='appSettings' type='application/javascript'>var _appSettings = {appSettings};</script></head>")
                .Replace("$HTTP_STATUS$", $"{(int)statusCode} {statusCode}");

            if (basePath != "/")
            {
                body = body.Replace("<base href=\"/\"", $"<base href=\"/{basePath}\"")
                    .Replace("<base href=/", $"<base href=\"{basePath}\"");
            }

            var response = context.Response;
            response.ContentType = "text/html";
            response.StatusCode = (int)statusCode;

            return response.WriteAsync(body);
        }

        private static CorsOptions GetCorsOptions()
        {
            var headers = AppSettings.CorsAllowedHeaders;
            var methods = AppSettings.CorsAllowedMethods;
            var origins = AppSettings.CorsAllowedOrigins;

            var corsPolicy = new CorsPolicy
            {
                AllowAnyHeader = headers.Length == 0,
                AllowAnyMethod = methods.Length == 0,
                AllowAnyOrigin = origins.Length == 0,
                SupportsCredentials = AppSettings.CorsSupportsCredentials
            };

            if (!corsPolicy.AllowAnyHeader)
            {
                foreach (var header in headers)
                {
                    corsPolicy.Headers.Add(header);
                }
            }

            if (!corsPolicy.AllowAnyMethod)
            {
                foreach (var method in methods)
                {
                    corsPolicy.Methods.Add(method);
                }
            }

            if (corsPolicy.AllowAnyOrigin)
            {
                return new CorsOptions
                {
                    PolicyProvider = new CorsPolicyProvider
                    {
                        PolicyResolver = request => Task.FromResult(corsPolicy)
                    }
                };
            }

            foreach (var origin in origins)
            {
                corsPolicy.Origins.Add(origin);
            }

            return new CorsOptions
            {
                PolicyProvider = new CorsPolicyProvider
                {
                    PolicyResolver = request => Task.FromResult(corsPolicy)
                }
            };
        }

        public static HttpConfiguration SetHttpConfiguration(ILifetimeScope container)
        {
            var config = new HttpConfiguration
            {
                DependencyResolver = new AutofacWebApiDependencyResolver(container),
                Filters =
                {
                    new NoCacheHeaderFilter()
                }
            };

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            return config;
        }
    }
}