using System.Web.Http;
using PlasticCat.Api.Domain;
using PlasticCat.Db;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("orders")]
    public class OrderController : BaseApiController
    {
        private readonly IDbManager dbManager;

        public OrderController(IDbManager dbManager)
        {
            this.dbManager = dbManager;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            return Ok(dbManager.ExecuteQueryFunc(
                dbManager.ExecuteQuery<Order>, 
                SqlHelper.SelectAll(Tables.Order.ToString())));
        }
    }
}