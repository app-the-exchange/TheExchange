using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
