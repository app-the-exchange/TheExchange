﻿using AutoMapper;
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
                cfg.CreateMap<country, Country>();
            });
        }
    }
}