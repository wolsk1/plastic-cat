using System.Web.Http;
using PlasticCat.Api.Domain;
using PlasticCat.Db;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("employees")]
    public class EmployeeController : BaseApiController
    {
        private readonly IDbManager dbManager;

        public EmployeeController(IDbManager dbManager)
        {
            this.dbManager = dbManager;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            return Ok(dbManager.ExecuteQueryFunc(
                dbManager.ExecuteQuery<Employee>, 
                SqlHelper.SelectAll(Tables.Order.ToString())));
        }
    }
}