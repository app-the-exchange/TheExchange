using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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
            });
        }
    }
}