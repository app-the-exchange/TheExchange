//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TheExchange.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class region
    {
        public region()
        {
            this.country = new HashSet<country>();
        }
    
        public int idregion { get; set; }
        public string name { get; set; }
    
        public virtual ICollection<country> country { get; set; }
    }
}
