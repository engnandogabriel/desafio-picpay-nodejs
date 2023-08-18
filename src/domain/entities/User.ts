import { v4 as uuidV4 } from "uuid";

export default class User {
  private id: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly document: string;
  public readonly email: string;
  public readonly password: string;
  public readonly balance: number;
  public readonly typeUser: string;

  constructor(user: Omit<User, "id">, id?: string) {
    if (!user.firstName) throw new Error("Firstname is required");
    if (!user.lastName) throw new Error("Lastname is required");
    if (!user.document) throw new Error("Cpf is required");
    if (!user.email) throw new Error("Email is required");
    if (!user.password) throw new Error("Password is required");

    this.id = id || uuidV4();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.document = this.validateCPF(user.document);
    this.email = this.validateEmail(user.email);
    this.password = user.password;
    this.balance = this.validateBalance(user.balance);
    this.typeUser = this.validateUserType(user.typeUser);
  }

  private validateCPF(cpf: string) {
    const cleanedCPF = cpf.replace(/\D/g, "");
    if (!cleanedCPF.match(/^\d{11}$/)) throw new Error("Invalid CPF.");
    return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  private validateEmail(email: string) {
    if (!email.match(/^\S+@\S+\.\S+$/)) throw new Error("Invalid email.");
    return email;
  }

  private validateUserType(typeUser: string) {
    if (typeUser !== "common" && typeUser !== "merchant") {
      throw new Error("Type User is invalid.");
    }
    return typeUser;
  }
  private validateBalance(value: number) {
    if (value < 0) throw new Error("The balance cannot be less than 0");
    return value;
  }
}
