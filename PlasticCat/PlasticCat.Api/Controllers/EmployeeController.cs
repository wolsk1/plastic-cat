using System.Data.SqlClient;
using System.Web.Http;
using PlasticCat.Api.Db;
using PlasticCat.Api.Domain;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("employees")]
    public class EmployeeController : BaseApiController
    {
        private readonly DbManager dbManager;
        //private readonly IRepository<Client, Client> consultations;
        //private INpgProvider provider;

        public EmployeeController(DbManager dbManager)
        {
            this.dbManager = dbManager;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            return Ok(dbManager.ExecuteQueryFunc(dbManager.ExecuteQuery<Employee>, new SqlCommand("select * from employee")));
        }
    }
}