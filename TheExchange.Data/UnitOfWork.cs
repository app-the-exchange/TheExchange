﻿using System;
using TheExchange.Data.Repository;

namespace TheExchange.Data
{
    public class UnitOfWork : IDisposable
    {
        private bool _disposed = false;
        private Entities _context;

        private RegionRepository _regionRepository;
        private CountryRepository _countryRepository;
        private CategoryRepository _categoryRepository;
        private CustomerRepository _customerRepository;
        private CustomeCountryRepository _customeCountryRepository;

        public RegionRepository RegionRepository
        {
            get => _regionRepository ?? (_regionRepository = new RegionRepository(_context));
        }

        public CountryRepository CountryRepository
        {
            get => _countryRepository ?? (_countryRepository = new CountryRepository(_context));
        }

        public CategoryRepository CategoryRepository
        {
            get => _categoryRepository ?? (_categoryRepository = new CategoryRepository(_context));
        }

        public CustomerRepository CustomerRepository
        {
            get => _customerRepository ?? (_customerRepository = new CustomerRepository(_context));
        }
        
        public CustomeCountryRepository CustomeCountryRepository
        {
            get => _customeCountryRepository ?? (_customeCountryRepository = new CustomeCountryRepository(_context));
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
