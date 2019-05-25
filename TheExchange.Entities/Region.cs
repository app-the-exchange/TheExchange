using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheExchange.Data;

namespace TheExchange.Entities
{
    public class Region
    {
        public string name { get; set; }

        //public static implicit operator Region(region entity)
        //    => Mapper.Map<Region>(entity);
    }
}
