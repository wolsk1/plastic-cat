namespace PlasticCat.Db
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Reflection;

    public class DbManager : IDbManager
    {
        private readonly string connectionString;

        public DbManager(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public IEnumerable<TItem> ExecuteQueryFunc<TItem>(
            Func<SqlCommand, IEnumerable<TItem>> commandFunc,
            SqlCommand command)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                command.Connection = connection;
                var response = commandFunc.Invoke(command);

                connection.Close();

                return response;
            }
        }

        public void Execute(Action<SqlCommand> commandFunc, SqlCommand command)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                command.Connection = connection;
                commandFunc.Invoke(command);
                connection.Close();
            }
        }

        public IEnumerable<TItem> ExecuteQuery<TItem>(SqlCommand command)
        {
            var items = new List<TItem>();

            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    items.Add(ExtractItem<TItem>(reader));
                }
            }

            return items;
        }

        public TItem ExtractItem<TItem>(SqlDataReader reader)
        {
            var instance = (TItem)Activator.CreateInstance(typeof(TItem));
            var properties = typeof(TItem).GetProperties(BindingFlags.Public | BindingFlags.Instance);

            foreach (var propertyInfo in properties)
            {
                var value = reader[propertyInfo.Name];
                Utils.TrySetPropertyValue(instance, propertyInfo.Name, value);
            }

            return instance;
        }
    }
}