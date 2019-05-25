using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheExchange.Data;
using TheExchange.Entities;

namespace TheExchange.Services
{
    public class RegionService
    {
        private UnitOfWork _uow;

        public RegionService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public List<Region> GetAll()
        {
            var regionList = _uow.RegionRepository.GetAll();

            return Mapper.Map<List<Region>>(regionList.ToList());
        }
    }
}
