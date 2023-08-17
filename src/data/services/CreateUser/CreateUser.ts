import { CreateUserDTO } from "../../../domain/DTO/CreateUserDTO";
import User from "../../../domain/entities/User";
import { CreateUserUseCase } from "../../../domain/useCases/CreateUserUseCase";
import { UserRepository } from "../../Contracts/UserRepository";

export default class CreateUser implements CreateUserUseCase {
  constructor(readonly UserRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    try {
      const emailAlreadyExist = await this.UserRepository.findByEmail(
        data.email
      );
      if (emailAlreadyExist) throw new Error("Email already exists");
      const cpfAlreadyExist = await this.UserRepository.findByDocument(
        data.document
      );
      if (cpfAlreadyExist) throw new Error("CPF already exists");

      const user = new User(data);
      await this.UserRepository.save(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Unexpected Error");
    }
  }
}
