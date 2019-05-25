using Newtonsoft.Json;

namespace TheExchange.Entities
{
    public class CustomerAppCountrie
    {
        public int idcustomer_app_countries { get; set; }
        public int idcustomer_app { get; set; }
        public int idcountry { get; set; }

        [JsonIgnore]
        public virtual Country country { get; set; }

        [JsonIgnore]
        public virtual CustomerApp customer_app { get; set; }
    }
}
