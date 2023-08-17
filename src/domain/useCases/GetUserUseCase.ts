import User from "../entities/User";

export interface GetUsersUseCase {
  execute(): Promise<User[] | void>;
}
