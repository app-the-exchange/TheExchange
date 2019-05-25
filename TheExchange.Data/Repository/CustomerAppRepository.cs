using TheExchange.Data.Repository.Base;

namespace TheExchange.Data.Repository
{
    public class CustomerAppRepository : GenericRepository<customer_app>
    {
        public CustomerAppRepository(Entities entities) : base(entities)
        {
        }
    }
}
