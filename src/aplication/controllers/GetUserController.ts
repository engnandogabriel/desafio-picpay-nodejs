import { Request, Response } from "express";
import { GetUsers } from "../../data/services/GetUser/GetUser";

export class GetUsersController {
  constructor(readonly getUsers: GetUsers) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getUsers.execute();

      return res.status(200).json(users);
    } catch (error) {
      if (error instanceof Error)
        return res.status(422).json({ message: error.message });
      return res.status(500).json({ message: "Erro" });
    }
  }
}
