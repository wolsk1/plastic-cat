using System.Web.Http;
using PlasticCat.Api.Domain;
using PlasticCat.Db;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("clients")]
    public class ClientController : BaseApiController
    {
        private readonly IDbManager dbManager;

        public ClientController(IDbManager dbManager)
        {
            this.dbManager = dbManager;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            return Ok(dbManager.ExecuteQueryFunc(
                dbManager.ExecuteQuery<Employee>, 
                SqlHelper.SelectAll(Tables.Client.ToString())));
        }

        [HttpPost]
        [Route("create")]
        public IHttpActionResult Create(Client client)
        {
            return Ok(client);
        }
    }
}