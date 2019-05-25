using System.Collections.Generic;
using TheExchange.Data.Repository.Base;
using System.Data.Entity;
using System.Linq;

namespace TheExchange.Data.Repository
{
    public class CategoryRepository : GenericRepository<category>
    {
        public CategoryRepository(Entities entities) : base(entities)
        {
        }

        public List<category> Get(int idcountry)
        {
            return Entities.category.Where(c => c.idcountry == idcountry).ToList();
        }
    }
}