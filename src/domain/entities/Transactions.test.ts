import Transaction from "./Transaction";

describe("Transaction", () => {
  it("should create a valid transaction", () => {
    const transactionData = {
      value: 100,
      payer: "Alice",
      payee: "Bob",
      created_at: new Date(),
    };

    const transaction = new Transaction(transactionData);

    expect(transaction.value).toBe(100);
    expect(transaction.payer).toBe("Alice");
    expect(transaction.payee).toBe("Bob");
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
