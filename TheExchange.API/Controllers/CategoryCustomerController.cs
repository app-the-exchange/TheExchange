using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    public class CategoryCustomerController : ApiController
    {
        private readonly CategoryCustomerService _service;

        public CategoryCustomerController()
        {
            var uow = new UnitOfWork();
            _service = new CategoryCustomerService(uow);
        }

        public List<CategoryCustomer> Get(int id)
        {
            var response = _service.Get(id);

            return response;
        }
    }
}
