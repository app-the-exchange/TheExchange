using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheExchange.Entities
{
    public class Customer
    {
        public int idcustomer { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public DateTime startdate { get; set; }

        public string course { get; set; }

        public string position { get; set; }

        public int? idcountry { get; set; }

        public int? idcustomer_app { get; set; }

        public string code { get; set; }

        public Country country { get; set; }
    }
}
