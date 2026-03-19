import bcrypt from 'bcrypt';

export class UserEntity {
  constructor(
    public id: string,
    public email: string,
    public username: string,
    public password_hash: string,
    public created_at: Date,
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.created_at = created_at;
    this.password_hash = password_hash;
  }

  async comparePasswordHash(password: string) {
    return await bcrypt.compare(password, this.password_hash);
  }
}
