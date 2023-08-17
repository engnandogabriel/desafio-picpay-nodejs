import { Request, Response } from "express";
import CreateUser from "../../data/services/CreateUser/CreateUser";

export class CreateUserController {
  constructor(readonly createUser: CreateUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        firstName,
        lastName,
        document,
        email,
        password,
        balance,
        typeUser,
      } = req.body;
      await this.createUser.execute({
        firstName,
        lastName,
        document,
        email,
        password,
        balance,
        typeUser,
      });
      return res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      if (error instanceof Error)
        return res.status(422).json({ message: error.message });
      return res.status(500).json({ message: "Erro" });
    }
  }
}
