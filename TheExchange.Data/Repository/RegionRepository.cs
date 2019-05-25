using TheExchange.Data.Repository.Base;

namespace TheExchange.Data.Repository
{
    public class RegionRepository : GenericRepository<region>
    {
        public RegionRepository(Entities entities) : base(entities)
        {
        }
    }
}
