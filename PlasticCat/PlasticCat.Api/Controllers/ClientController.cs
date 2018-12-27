using System.Threading.Tasks;
using System.Web.Http;
using PlasticCat.Api.Domain;

namespace PlasticCat.Api.Controllers
{
    [RoutePrefix("clients")]
    public class ClientController : BaseApiController
    {
        private readonly ClientRepo clients;

        public ClientController(ClientRepo clients)
        {
            this.clients = clients;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult List()
        {
            var items = clients.All();
            return Ok(items);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IHttpActionResult> Create(Client client)
        {
            await clients.Create(client);

            return Ok();
        }
    }
}