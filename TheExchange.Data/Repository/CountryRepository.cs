using TheExchange.Data.Repository.Base;

namespace TheExchange.Data.Repository
{
    public class CountryRepository : GenericRepository<country>
    {
        public CountryRepository(Entities entities) : base(entities)
        {
        }
    }
}
