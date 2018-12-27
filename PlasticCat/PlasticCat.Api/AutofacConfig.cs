using PlasticCat.Api.Domain;
using PlasticCat.Db;

namespace PlasticCat.Api
{
    using Controllers;
    using Autofac;
    using Autofac.Integration.WebApi;
    using System.Reflection;

    internal class AutofacConfig : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            RegisterDatabaseComponents(builder);
            RegisterRepos(builder);
            RegisterControllers(builder);
        }

        private static void RegisterDatabaseComponents(ContainerBuilder builder)
        {
            builder.RegisterType<DbManager>()
                .As<IDbManager>()
                .SingleInstance()
                .WithParameter("connectionString", AppConfig.DbConnectionString);
        }

        private static void RegisterControllers(ContainerBuilder builder)
        {            
            builder.RegisterType<OrderController>()
                .AsSelf();
            builder.RegisterType<EmployeeController>()
                .AsSelf();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }

        private static void RegisterRepos(ContainerBuilder builder)
        {            
            builder.RegisterType<ClientRepo>()
                .AsSelf();
        }
    }
}