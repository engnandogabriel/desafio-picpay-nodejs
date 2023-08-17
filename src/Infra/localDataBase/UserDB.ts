import { UserRepository } from "../../data/Contracts/UserRepository";
import User from "../../domain/entities/User";

export class UserDb implements UserRepository {
  data: User[];
  constructor() {
    this.data = [];
  }

  async findByEmail(email: string): Promise<void | User> {
    return this.data.find((user) => user.email === email);
  }
  async findByDocument(cpf: string): Promise<void | User> {
    return this.data.find((user) => user.document === cpf);
  }
  async save(user: User): Promise<void> {
    this.data.push(user);
  }
  async getUsers(): Promise<User[]> {
    return this.data;
  }
}
