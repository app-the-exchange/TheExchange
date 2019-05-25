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

        public List<Category> Get(int id)
        {
            var response = _service.Get(id);

            return response;
        }
    }
}
