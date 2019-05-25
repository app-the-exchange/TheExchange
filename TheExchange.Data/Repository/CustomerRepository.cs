using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheExchange.Data.Repository.Base
{
    public class CustomerRepository : GenericRepository<customer>
    {
        public CustomerRepository(Entities entities) : base(entities)
        {
        }

        public customer GetByCode(string code)
        {
            return Entities.customer.FirstOrDefault(c => c.code == code);
        }

        public customer GetByEmail(string email)
        {
            return Entities.customer.FirstOrDefault(c => c.email.Contains(email));
        }
    }
}
