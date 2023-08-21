import User from "../../domain/entities/User";

export interface UserRepository {
  findByEmail(email: string): Promise<User | void>;
  findByDocument(document: string): Promise<User | void>;
  findPayer(id: string): Promise<User | void>;
  findPayee(id: string): Promise<User | void>;
  save(user: User): Promise<void>;
  getUsers(): Promise<User[]>;
  correctionValues(payer: User, payee: User, value: number): Promise<void>;
}
