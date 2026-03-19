export interface DomainContract<TEntity, TDatabase> {
  toEntity(prisma: TDatabase): TEntity;
  toDatabase(entity: TEntity): TDatabase;
}
