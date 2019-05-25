using AutoMapper;
using System;
using TheExchange.Data;
using TheExchange.Entities;

namespace TheExchange.Services
{
    public class CustomerAppService
    {
        private UnitOfWork _uow;

        public CustomerAppService(UnitOfWork uow)
        {
            _uow = uow;
        }

        public int PostCustomerApp(CustomerApp entity)
        {
            customer_app _entity = Mapper.Map<customer_app>(entity);

            _uow.CustomerAppRepository.Add(_entity);
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

        public bool AddCode(CustomerApp entity)
        {
            try
            {
                var customerApp = _uow.CustomerAppRepository.GetById(entity.idcustomer_app);

                if (customerApp == null)
                {
                    // Usuário não existe
                    return false;
                }

                var customer = _uow.CustomerRepository.GetByEmail(customerApp.email);

                if (customer == null)
                {
                    // Agência precisa criar usuário
                    return false;
                }

                if (entity.code != customer.code)
                {
                    // Código inválido
                    return false;
                }

                customerApp.code = entity.code;
                _uow.CustomerAppRepository.Update(customerApp);

                customer.idcustomer_app = customerApp.idcustomer_app;
                _uow.CustomerRepository.Update(customer);

                _uow.Commit();

                return true;
            }
            catch(Exception ex)
            {
                // Exception
                return false;
            }
        }

    }
}