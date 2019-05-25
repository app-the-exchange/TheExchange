using System.Collections.Generic;
using System.Web.Http;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    public class CountryController : ApiController
    {
        private readonly CountryService _service;

        public CountryController()
        {
            var uow = new UnitOfWork();
            _service = new CountryService(uow);
        }

        public List<Country> Get()
        {
            var response = _service.GetAll();

            return response;
        }

        public Country Get(int id)
        {
            var response = _service.Get(id);

            return response;
        }
    }
}
