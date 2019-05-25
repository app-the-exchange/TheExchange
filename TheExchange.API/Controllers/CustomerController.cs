using System.Web.Http;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    public class CustomerController : ApiController
    {
        private readonly CustomerService _service;

        public CustomerController()
        {
            var uow = new UnitOfWork();
            _service = new CustomerService(uow);
        }

        [Route("CustomerApp")]
        public int Post([FromBody]CustomerApp entity)
        {
            return _service.PostCustomerApp(entity);
        }

        [HttpPost]
        [Route("CustomerApp/Country")]
        public void PostCountry([FromBody]CustomerAppCountrie entity)
        {
            _service.PostCustomerAppCountry(entity);
        }

    }
}
