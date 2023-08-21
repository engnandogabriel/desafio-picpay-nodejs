import CreateTransectionDTO from "../../../domain/DTO/CreateTransactionDTO";
import Transaction from "../../../domain/entities/Transaction";
import CreateTransactionUseCase from "../../../domain/useCases/CreateTransactionUseCase";
import TransactionRepository from "../../Contracts/TransactionRepostiroty";
import { UserRepository } from "../../Contracts/UserRepository";

export default class CreateTransaction implements CreateTransactionUseCase {
  constructor(
    readonly transactionRepository: TransactionRepository,
    readonly userRepository: UserRepository
  ) {}

  async execute(data: CreateTransectionDTO): Promise<void | Transaction> {
    try {
      const payer = await this.userRepository.findPayer(data.payer);
      if (!payer) throw new Error("Payer do not exists");
      if (payer.typeUser === "merchant")
        throw new Error(
          "Payer is a merchant User! Transaction is not effectuated"
        );

      if (payer.balance < data.value)
        throw new Error(
          "The Payer wallet does not have enough balance for the transaction"
        );

      const payee = await this.userRepository.findPayee(data.payee);
      if (!payee) throw new Error("Payee do not exists");

      const transaction = new Transaction({
        value: data.value,
        payer: payer,
        payee: payee,
        created_at: new Date(),
      });

      await this.userRepository.correctionValues(payer, payee, data.value);
      await this.transactionRepository.createTranaction(transaction);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      throw new Error("Unexpected Error");
    }
  }
}
