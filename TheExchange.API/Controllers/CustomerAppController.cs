using System.Web.Http;
using TheExchange.API.Helpers;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    [RoutePrefix("api/CustomerApp")]
    public class CustomerAppController : ApiController
    {
        private readonly CustomerAppService _service;

        public CustomerAppController()
        {
            var uow = new UnitOfWork();
            _service = new CustomerAppService(uow);
        }

        [Route("CustomerApp")]
        public int Post([FromBody]CustomerApp entity)
        {
            return _service.PostCustomerApp(entity);
        }

        [HttpPost]
        [Route("CustomerApp/Country")]
        public bool PostCountry([FromBody]CustomerAppCountrie entity)
        {
            _service.PostCustomerAppCountry(entity);
            return true;
        }

        [HttpPost]
        [Route("AddCode")]
        public bool AddCode([FromBody]CustomerApp entity)
        {
            if (string.IsNullOrEmpty(entity.code))
            {
                return false;
            }

            entity.code = System.Text.Encoding.UTF8.DecodeBase64(entity.code);

            return _service.AddCode(entity);
        }

    }
}