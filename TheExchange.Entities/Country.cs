using AutoMapper;
using System.Collections.Generic;
using TheExchange.Data;

namespace TheExchange.Entities
{
    public class Country
    {
        public int idcountry { get; set; }

        public string name { get; set; }

        public string short_description { get; set; }

        public string description1 { get; set; }

        public string description2 { get; set; }

        public string flag_image { get; set; }

        public string banner_image { get; set; }

        public List<Category> category { get; set; }

        public static implicit operator Country(country entity)
            => Mapper.Map<Country>(entity);
    }
}
