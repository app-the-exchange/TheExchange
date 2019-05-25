using TheExchange.Data.Repository.Base;

namespace TheExchange.Data
{
    public class CategoryRepository : GenericRepository<category>
    {
        public CategoryRepository(Entities entities) : base(entities)
        {
        }
    }
}