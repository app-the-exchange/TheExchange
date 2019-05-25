using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheExchange.Data.Repository.Base;
using System.Data.Entity;

namespace TheExchange.Data.Repository
{
    public class CategoryCustomerRepository : GenericRepository<category_customer>
    {
        public CategoryCustomerRepository(Entities entities) : base(entities)
        {
        }

        public List<category_customer> Get(int idcustomer)
        {
            return Entities.category_customer.Where(cc => cc.idcustomer == idcustomer).ToList();
        }
    }   
}
