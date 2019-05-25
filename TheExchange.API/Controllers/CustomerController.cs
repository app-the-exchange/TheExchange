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
        public void Post([FromBody]CustomerApp entity)
        {
            _service.PostCustomerApp(entity);
        }

    }
}
