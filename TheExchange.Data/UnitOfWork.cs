using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheExchange.Data.Repository;

namespace TheExchange.Data
{
    public class UnitOfWork : IDisposable
    {
        private bool _disposed = false;
        private Entities _context;

        private RegionRepository _regionRepository;

        public RegionRepository RegionRepository
        {
            get => _regionRepository ?? (_regionRepository = new RegionRepository(_context));
        }

        public UnitOfWork()
        {
            _context = new Entities();
        }

        public int Commit()
        {
            return _context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
