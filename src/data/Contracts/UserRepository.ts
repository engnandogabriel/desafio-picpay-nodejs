import User from "../../domain/entities/User";

export interface UserRepository {
  findByEmail(email: string): Promise<User | void>;
  findByDocument(document: string): Promise<User | void>;
  save(user: User): Promise<void>;
  getUsers(): Promise<User[]>;
}
