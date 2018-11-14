using System.Web.Http;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("orders")]
    public class OrderController : BaseApiController
    {
        //private readonly IRepository<Client, Client> consultations;
        //private INpgProvider provider;

        public OrderController()
        {

        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            //var success = await provider.GetRecordsAsync<Client>("clients");

            //return Ok(success);
            return Ok();
        }
    }
}