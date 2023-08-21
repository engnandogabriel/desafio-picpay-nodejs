import Transaction from "../../../domain/entities/Transaction";
import GetTransactionUseCase from "../../../domain/useCases/GetTransactionUseCase";
import TransactionRepository from "../../Contracts/TransactionRepostiroty";

export default class GetTransaction implements GetTransactionUseCase {
  constructor(readonly transactionRepository: TransactionRepository) {}
  async execute(): Promise<Transaction[]> {
    try {
      const transaction = await this.transactionRepository.getTransactions();
      return transaction;
    } catch (error) {
      throw new Error("Unexpected Error");
    }
  }
}
