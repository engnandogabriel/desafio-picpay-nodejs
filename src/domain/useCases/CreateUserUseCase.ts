import { CreateUserDTO } from "../DTO/CreateUserDTO";

export interface CreateUserUseCase {
  execute(data: CreateUserDTO): Promise<void>;
}
