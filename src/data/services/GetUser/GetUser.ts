import User from "../../../domain/entities/User";
import { GetUsersUseCase } from "../../../domain/useCases/GetUserUseCase";
import { UserRepository } from "../../Contracts/UserRepository";

export class GetUsers implements GetUsersUseCase {
  users: User[];
  constructor(readonly usersRepository: UserRepository) {
    this.users = [];
  }

  async execute(): Promise<void | User[]> {
    try {
      this.users = await this.usersRepository.getUsers();
      return this.users;
    } catch (error) {
      throw new Error("Unexpected error");
    }
  }
}
