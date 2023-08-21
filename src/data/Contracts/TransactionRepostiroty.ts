import Transaction from "../../domain/entities/Transaction";

export default interface TransactionRepository {
  createTranaction(data: Transaction): Promise<Transaction>;
  getTransactions(): Promise<Transaction[]>;
}
