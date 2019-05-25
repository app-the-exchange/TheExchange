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

        public int PostCustomerApp(CustomerApp entity)
        {
            customer_app _entity = Mapper.Map<customer_app>(entity);

            _uow.CustomerRepository.Add(_entity);
            _uow.Commit();

            return _entity.idcustomer_app;
        }

        public int PostCustomerAppCountry(CustomerAppCountrie entity)
        {
            customer_app_countries _entity = Mapper.Map<customer_app_countries>(entity);

            _uow.CustomeCountryRepository.Add(_entity);
            _uow.Commit();

            return _entity.idcustomer_app;
        }

    }
}
