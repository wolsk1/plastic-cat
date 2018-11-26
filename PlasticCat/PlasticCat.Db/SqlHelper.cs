namespace PlasticCat.Db
{
    using System.Data.SqlClient;

    public class SqlHelper
    {
        private const string Select = "SELECT";
        private const string From = "FROM";
        private const string AllProperties = "*";

        public static SqlCommand SelectAll(string table, string schema = "")
        {
            var sqlTable = string.IsNullOrEmpty(schema) 
                ? $"[{table}]" 
                : $"[{schema}].[{table}]";

            return new SqlCommand($"{Select} {AllProperties} {From} {sqlTable}");
        }
    }
}