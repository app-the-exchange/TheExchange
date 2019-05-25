using TheExchange.Data.Repository.Base;

namespace TheExchange.Data
{
    public class CustomerRepository : GenericRepository<customer_app>
    {
        public CustomerRepository(Entities entities) : base(entities)
        {
        }
    }
}
