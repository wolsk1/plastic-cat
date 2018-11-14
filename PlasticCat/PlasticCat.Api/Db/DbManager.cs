using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Reflection;

namespace PlasticCat.Api.Db
{
    public class DbManager
    {
        public IEnumerable<TItem> ExecuteQueryFunc<TItem>(Func<SqlCommand, IEnumerable<TItem>> commandFunc, SqlCommand command)
        {
            using (var connection = new SqlConnection(AppConfig.DbConnectionString))
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
            using (var connection = new SqlConnection(AppConfig.DbConnectionString))
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
            var properties = typeof(TItem).GetProperties( BindingFlags.Public | BindingFlags.Instance);

            foreach (var propertyInfo in properties)
            {
                var value = reader[propertyInfo.Name];
                TrySetPropertyValue(instance, propertyInfo.Name, value);
            }

            return instance;
        }

        private void TrySetPropertyValue<TObject>(TObject @object, string propertyName, object propertyValue)
        {
            var objectType = typeof(TObject);
            var property = objectType.GetProperty(propertyName, BindingFlags.Public | BindingFlags.Instance);

            if (null == property || !property.CanWrite)
            {
                return;
            }

            object newObject = null;
            try
            {
                newObject = Convert.ChangeType(propertyValue, property.PropertyType);
            }
            catch (InvalidCastException)
            {
                newObject = GetDefault(property.PropertyType);
            }

            property.SetValue(@object, newObject, null);
        }

        private object GetDefault(Type t)
        {
            return this.GetType().GetMethod("GetDefaultGeneric").MakeGenericMethod(t).Invoke(this, null);
        }

        private T GetDefaultGeneric<T>()
        {
            return default(T);
        }
    }
}