using AutoMapper;
using System.Collections.Generic;
using TheExchange.Data;
using TheExchange.Entities;

namespace TheExchange.Services
{
    public class CountryService
    {
        private UnitOfWork _uow;

        public CountryService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public List<Country> GetAll()
        {
            var list = _uow.CountryRepository.GetAll();

            return Mapper.Map<List<Country>>(list);
        }

        public Country Get(int id)
        {
            var entity = _uow.CountryRepository.GetById(id);

            return Mapper.Map<Country>(entity);
        }

        public void Post(Country entity)
        {
            country _entity = Mapper.Map<country>(entity);

            _uow.CountryRepository.Add(_entity);
        }

        public void Put(Country entity)
        {
            country _entity = Mapper.Map<country>(entity);

            _uow.CountryRepository.Update(_entity);
        }

        public void Delete(int id)
        {
            var _entity = _uow.CountryRepository.GetById(id);

            _uow.CountryRepository.Delete(_entity);
        }
    }
}
