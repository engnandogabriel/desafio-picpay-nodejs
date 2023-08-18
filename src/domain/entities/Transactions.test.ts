import Transaction from "./Transaction";
import User from "./User";

describe("Transaction", () => {
  it("should create a valid transaction", () => {
    const payerUser = new User({
      firstName: "John",
      lastName: "Doe",
      document: "12345678901",
      email: "john@example.com",
      password: "securepassword",
      balance: 1000,
      typeUser: "common",
    });

    const payeeUser = new User({
      firstName: "Marcos",
      lastName: "Doe",
      document: "12345678902",
      email: "marcos@example.com",
      password: "securepassword",
      balance: 1000,
      typeUser: "merchant",
    });

    const transactionData = {
      value: 100,
      payer: payerUser,
      payee: payeeUser,
      created_at: new Date(),
    };

    const transaction = new Transaction(transactionData);

    expect(transaction.value).toBe(100);
    expect(transaction.payer.firstName).toBe("John");
    expect(transaction.payee.firstName).toBe("Marcos");
    expect(transaction.created_at).toBe(transactionData.created_at);
    expect(transaction.id).toBeDefined();
  });

  it("should throw an error for negative value", () => {
    const transactionData = {
      value: -50,
      payer: "Alice",
      payee: "Bob",
      created_at: new Date(),
    };

    expect(() => new Transaction(transactionData as any)).toThrow(
      "Incorrect value"
    );
  });

  it("should throw an error for missing payer", () => {
    const transactionData = {
      value: 100,
      payee: "Bob",
      created_at: new Date(),
    };

    expect(() => new Transaction(transactionData as any)).toThrow(
      "Payer is not defined"
    );
  });

  it("should throw an error for missing payee", () => {
    const transactionData = {
      value: 100,
      payer: "Alice",
      created_at: new Date(),
    };

    expect(() => new Transaction(transactionData as any)).toThrow(
      "Payee is not defined"
    );
  });

  it("should throw an error for missing date", () => {
    const transactionData = {
      value: 100,
      payer: "Alice",
      payee: "Bob",
    };

    expect(() => new Transaction(transactionData as any)).toThrow(
      "Invalid or missing Date"
    );
  });

  it("should throw an error for invalid date", () => {
    const transactionData = {
      value: 100,
      payer: "Alice",
      payee: "Bob",
      created_at: "invalid_date" as any,
    };

    expect(() => new Transaction(transactionData as any)).toThrow(
      "Invalid or missing Date"
    );
  });
});
