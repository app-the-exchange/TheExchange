using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using TheExchange.Data;
using TheExchange.Entities;

namespace TheExchange.Services
{
    public class CategoryService
    {
        private UnitOfWork _uow;

        public CategoryService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public List<Category> GetAll()
        {
            var _list = _uow.CategoryRepository.GetAll();

            return Mapper.Map<List<Category>>(_list.ToList());
        }
    }
}
