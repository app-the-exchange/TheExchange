using Newtonsoft.Json;
using System.Collections.Generic;

namespace TheExchange.Entities
{
    public class CustomerApp
    {
        public int idcustomer_app { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string code { get; set; }

        [JsonIgnore]
        public virtual List<CustomerAppCountrie> customer_app_countries { get; set; }
    }
}
