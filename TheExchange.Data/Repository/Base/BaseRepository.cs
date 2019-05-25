using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheExchange.Data.Repository.Base
{
    public abstract class BaseRepository
    {
        protected Entities Entities { get; set; }

        public BaseRepository(Entities entities)
        {
            Entities = entities;
        }
    }
}
