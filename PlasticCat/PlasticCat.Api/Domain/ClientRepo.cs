using System;
using System.Data.SqlClient;
using System.Threading.Tasks;
using PlasticCat.Db;

namespace PlasticCat.Api.Domain
{
    public class ClientRepo
    {
        private readonly IDbManager dbManager;

        public ClientRepo(IDbManager dbManager)
        {
            this.dbManager = dbManager;
        }

        // TODO: add return type to know if operation was success
        public async Task Create(Client client)
        {
            var cmd = new SqlCommand(@"INSERT INTO [dbo].[Client](Name, Surname, RegistrationNumber, Phone, Email) 
                                                VALUES(@name, @surname, @regNumber, @phone, @email)");
            cmd.Parameters.AddWithValue("@name", client.Name);
            cmd.Parameters.AddWithValue("@surname", client.Surname ?? Convert.DBNull);
            cmd.Parameters.AddWithValue("@regNumber", client.RegistrationNumber ?? Convert.DBNull);
            cmd.Parameters.AddWithValue("@phone", client.Phone ?? Convert.DBNull);
            cmd.Parameters.AddWithValue("@email", client.Email ?? Convert.DBNull);

            await dbManager.Execute(cmd);
        }
    }
}