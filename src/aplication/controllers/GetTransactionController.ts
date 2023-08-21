import { Request, Response } from "express";
import GetTransaction from "../../data/services/GetTransaction/GetTransaction";

export default class GetTransactionController {
  constructor(readonly getTransacion: GetTransaction) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const transaction = await this.getTransacion.execute();
      return res.status(200).json({ message: transaction });
    } catch (error) {
      return res.status(500).json({ erro: "Unexpected Error" });
    }
  }
}
