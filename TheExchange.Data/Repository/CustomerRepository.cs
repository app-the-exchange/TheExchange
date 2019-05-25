using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

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

        public override customer GetById(long id)
        {
            return Entities.customer.Include(c => c.country).FirstOrDefault(c => c.idcustomer == id);
        }
    }
}
