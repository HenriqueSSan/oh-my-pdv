import { DomainContract } from '../../../infra/core/contract/_domain.contract';
import { UserEntity } from '../entity/user.entity';

type UserDatabase = {
  id: string;
  email: string;
  username: string;
  created_at: Date;
  password_hash: string;
};

export class UserDomain implements DomainContract<UserEntity, UserDatabase> {
  toEntity(db: UserDatabase) {
    return new UserEntity(db.id, db.email, db.username, db.password_hash, db.created_at);
  }

  toDatabase(entity: UserEntity) {
    return {
      id: entity.id,
      email: entity.email,
      username: entity.username,
      password_hash: entity.password_hash,
      created_at: entity.created_at,
    };
  }
}
