﻿using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;

namespace TheExchange.Data.Repository.Base
{
    public abstract class GenericRepository<TEntity> : BaseRepository where TEntity : class
    {
        private readonly IDbSet<TEntity> _dbSet;

        public GenericRepository(Entities entities) : base(entities)
        {
            _dbSet = Entities.Set<TEntity>();
        }

        public virtual TEntity GetById(long id)
        {
            return _dbSet.Find(id);
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

        public virtual void Add(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public virtual void AddRange(IEnumerable<TEntity> entities)
        {
            if (entities == null || !entities.Any())
            {
                return;
            }

            foreach (var entity in entities)
            {
                _dbSet.Add(entity);
            }

        }

        public virtual void Update(TEntity entity)
        {
            var entry = Entities.Entry(entity);
            _dbSet.Attach(entity);
            entry.State = EntityState.Modified;
        }

        public virtual void Delete(TEntity entity)
        {
            _dbSet.Remove(entity);
        }

        public virtual void DeleteRange(IEnumerable<TEntity> entities)
        {
            if (entities == null || !entities.Any())
            {
                return;
            }

            foreach (var entity in entities)
            {
                _dbSet.Remove(entity);
            }

        }
    }
}
