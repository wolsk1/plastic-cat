using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace PlasticCat.Db
{
    public interface IDbManager
    {
        IEnumerable<TItem> ExecuteQueryFunc<TItem>(
            Func<SqlCommand, IEnumerable<TItem>> commandFunc,
            SqlCommand command);
        Task Execute(SqlCommand command);
        void Execute(Action<SqlCommand> commandFunc, SqlCommand command);
        IEnumerable<TItem> ExecuteQuery<TItem>(SqlCommand command);
        TItem ExtractItem<TItem>(SqlDataReader reader);
    }
}