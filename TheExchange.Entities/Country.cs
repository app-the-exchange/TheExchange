using AutoMapper;
using TheExchange.Data;

namespace TheExchange.Entities
{
    public class Country
    {
        public string name { get; set; }

        public static implicit operator Country(country entity)
            => Mapper.Map<Country>(entity);
    }
}
