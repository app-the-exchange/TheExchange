using System.Collections.Generic;
using System.Web.Http;
using TheExchange.API.Helpers;
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

        public Customer Get(int id)
        {
            var response = _service.GetById(id);

            return response;
        }

        public List<Customer> Get()
        {
            var response = _service.GetAll();

            return response;
        }

        [HttpGet]
        public Customer Get(string code = null, string email = null)
        {
            Customer response;

            if (!string.IsNullOrEmpty(code))
            {
                var codeDecoded = System.Text.Encoding.UTF8.DecodeBase64(code);

                response = _service.GetByCode(codeDecoded);
            }
            else
            {
                var emailDecoded = System.Text.Encoding.UTF8.DecodeBase64(email);

                response = _service.GetByEmail(emailDecoded);
            }

            return response;
        }


    }
}
