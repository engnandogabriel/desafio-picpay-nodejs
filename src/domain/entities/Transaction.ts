import { v4 as uuidV4 } from "uuid";

export default class Transaction {
  public readonly id?: string;
  public readonly value: number;
  public readonly payer: string;
  public readonly payee: string;
  public readonly created_at: Date;

  constructor(transaction: Omit<Transaction, "id">, id?: string) {
    if (!transaction.value) throw new Error("Value is not defined");
    if (!transaction.payer) throw new Error("Payer is not defined");
    if (!transaction.payee) throw new Error("Payee is not defined");
    if (!transaction.created_at || !(transaction.created_at instanceof Date)) {
      throw new Error("Invalid or missing Date");
    }

    this.id = id || uuidV4();
    this.value = this.validateValue(transaction.value);
    this.payer = transaction.payer;
    this.payee = transaction.payee;
    this.created_at = transaction.created_at;
  }

  private validateValue(value: number) {
    if (value < 0) throw new Error("Incorrect value");
    return value;
  }
}
