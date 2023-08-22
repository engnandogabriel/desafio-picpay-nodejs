import AuthorizationTransactionService from "./AuthorizationTransaciton";

describe("AuthorizationTransactionService", () => {
  it('should return "Autorizado" on successful API response', async () => {
    const authorizationTransaction = new AuthorizationTransactionService();
    const result = await authorizationTransaction.execute();
    expect(result.message).toBe("Autorizado");
  });

  it('should return "Não Autorizado" on unsuccessful API response', async () => {
    const authorizationTransaction = new AuthorizationTransactionService();
    const result = await authorizationTransaction.execute();

    expect(result.message).toBe("Não Autorizado");
  });
});
