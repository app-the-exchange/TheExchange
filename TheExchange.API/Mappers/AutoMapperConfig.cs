using AutoMapper;
using TheExchange.Data;
using TheExchange.Entities;

namespace TheExchange.API.Mappers
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<region, Region>();

                cfg.CreateMap<country, Country>().ForMember(
                    dest => dest.category,
                    opt => opt.MapFrom(src => src.category)
                );

                cfg.CreateMap<category_customer, CategoryCustomer>();

                cfg.CreateMap<customer, Customer>().ForMember(
                    dest => dest.country,
                    opt => opt.MapFrom(src => src.country)
                );
            });
        }
    }
}