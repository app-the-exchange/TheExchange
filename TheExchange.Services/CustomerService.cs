using AutoMapper;
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

        public void PostCustomerApp(CustomerApp entity)
        {
            customer_app _entity = Mapper.Map<customer_app>(entity);

            _uow.CustomerRepository.Add(_entity);
        }

    }
}
