using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using TheExchange.Data;
using TheExchange.Entities;
using TheExchange.Services;

namespace TheExchange.API.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
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

        [HttpPost]
        public bool Post([FromBody]Country entity)
        {
            try
            {
                _service.Post(entity);
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool Put([FromBody]Country entity)
        {
            try
            {
                _service.Put(entity);
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpDelete]
        public bool Delete(int id)
        {
            try
            {
                _service.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}
