using System.Collections.Generic;
using TheExchange.Data.Repository.Base;
using System.Data.Entity;
using System.Linq;

namespace TheExchange.Data.Repository
{
    public class CountryRepository : GenericRepository<country>
    {
        public CountryRepository(Entities entities) : base(entities)
        {
        }

        public override IEnumerable<country> GetAll()
        {
            return Entities.country.ToList();
        }
    }
}
