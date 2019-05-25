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
    public class CategoryCustomerService
    {
        private UnitOfWork _uow;

        public CategoryCustomerService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public List<CategoryCustomer> Get(int idcustomer)
        {
            var _list = _uow.CategoryCustomerRepository.Get(idcustomer);

            return Mapper.Map<List<CategoryCustomer>>(_list);
        }
    }
}
