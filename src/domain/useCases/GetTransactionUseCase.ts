import Transaction from "../entities/Transaction";

export default interface GetTransactionUseCase {
  execute(): Promise<Transaction[]>;
}
