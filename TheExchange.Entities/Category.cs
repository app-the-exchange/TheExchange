using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheExchange.Entities
{
    public class Category
    {
        public string name { get; set; }

        public string description { get; set; }

        public string background_image { get; set; }

        public int idcountry { get; set; }
    }
}
