using System.Collections.Generic;
using System.Web.Http;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    public class CategoryController : ApiController
    {
        private readonly CategoryService _service;

        public CategoryController()
        {
            var uow = new UnitOfWork();
            _service = new CategoryService(uow);
        }

        public List<Category> Get()
        {
            var response = _service.GetAll();

            return response;
        }
    }
}
