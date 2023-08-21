import { UserRepository } from "../../data/Contracts/UserRepository";
import User from "../../domain/entities/User";

const user1: User = new User({
  firstName: "Nando Gabriel",
  lastName: "Machado Bezerra",
  document: "62803120380",
  email: "nando@gmail.com",
  password: "123456",
  balance: 1000,
  typeUser: "common",
});

const user2: User = new User({
  firstName: "Marcos",
  lastName: "Leonardo",
  document: "03055916301",
  email: "marcosg@gmail.com",
  password: "123456",
  balance: 500,
  typeUser: "merchant",
});

export class UserDb implements UserRepository {
  data: User[];
  constructor() {
    this.data = [user1, user2];
  }

  async findPayer(id: string): Promise<void | User> {
    return this.data.find((user) => user.id === id);
  }
  async findPayee(id: string): Promise<void | User> {
    return this.data.find((user) => user.id === id);
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

  async correctionValues(
    payer: User,
    payee: User,
    value: number
  ): Promise<void> {
    this.data.forEach((user) => {
      if (user.id === payee.id) user.balance = payee.balance + Number(value);
      if (user.id === payer.id) user.balance = payer.balance - value;
    });
  }
}
