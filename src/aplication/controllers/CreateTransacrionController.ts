import { Request, Response } from "express";
import CreateTransaction from "../../data/services/CreateTransaction/CreateTransaction";

export default class CreateTransactionController {
  constructor(readonly createTransactin: CreateTransaction) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { value, payer, payee } = req.body;
      const createTranaction = await this.createTransactin.execute({
        value,
        payer,
        payee,
      });

      return res.status(201).json({ message: createTranaction });
    } catch (error) {
      if (error instanceof Error)
        return res.status(422).json({ message: error.message });
      return res.status(500).json({ message: "Unexpected Error" });
    }
  }
}
