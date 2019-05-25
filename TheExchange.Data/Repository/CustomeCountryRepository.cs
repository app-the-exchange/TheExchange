using TheExchange.Data.Repository.Base;

namespace TheExchange.Data.Repository
{
    public class CustomeCountryRepository : GenericRepository<customer_app_countries>
    {
        public CustomeCountryRepository(Entities entities) : base(entities)
        {
        }
    }
}
