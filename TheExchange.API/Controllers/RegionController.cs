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
    public class RegionController : ApiController
    {
        private RegionService _regionService;

        public RegionController()
        {
            var uow = new UnitOfWork();
            _regionService = new RegionService(uow);
        }

        public List<Region> Get()
        {
            var response = _regionService.GetAll();

            return response;
        }
    }
}
