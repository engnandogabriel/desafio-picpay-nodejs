import CreateTransectionDTO from "../DTO/CreateTransactionDTO";
import Transaction from "../entities/Transaction";

export default interface CreateTransactionUseCase {
  execute(data: CreateTransectionDTO): Promise<Transaction | void>;
}
