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
    public class CustomerService
    {
        private UnitOfWork _uow;

        public CustomerService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public Customer GetByCode(string code)
        {
            var response = _uow.CustomerRepository.GetByCode(code);

            return Mapper.Map<Customer>(response);
        }

        public Customer GetByEmail(string email)
        {
            var response = _uow.CustomerRepository.GetByEmail(email);

            return Mapper.Map<Customer>(response);
        }

        public Customer GetById(int idcustomer)
        {
            var response = _uow.CustomerRepository.GetById(idcustomer);

            return Mapper.Map<Customer>(response);
        }
    }
}
