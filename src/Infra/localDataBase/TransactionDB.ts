import TransactionRepository from "../../data/Contracts/TransactionRepostiroty";
import Transaction from "../../domain/entities/Transaction";

export default class TransactionDB implements TransactionRepository {
  private transaction: Transaction[];
  constructor() {
    this.transaction = [];
  }

  async createTranaction(data: Transaction): Promise<Transaction> {
    this.transaction.push(data);
    return data;
  }
  async getTransactions(): Promise<Transaction[]> {
    return this.transaction;
  }
}
