import User from "./User"; // Importe o módulo correto aqui

describe("User Entity", () => {
  it("should create a user with valid input", () => {
    const user = new User({
      firstName: "John",
      lastName: "Doe",
      document: "12345678901",
      email: "john@example.com",
      password: "securepassword",
      balance: 1000,
      typeUser: "common",
    });

    expect(user).toBeDefined();
    expect(user.firstName).toBe("John");
    expect(user.lastName).toBe("Doe");
    expect(user.document).toBe("123.456.789-01");
    expect(user.email).toBe("john@example.com");
    expect(user.password).toBe("securepassword");
    expect(user.balance).toBe(1000);
    expect(user.typeUser).toBe("common");
  });

  it("should throw an error for missing properties", () => {
    expect(
      () =>
        new User({
          firstName: "John",
          lastName: "Doe",
          document: "12345678901",
          email: "john@example.com",
          password: "securepassword",
          balance: 1000,
          typeUser: "",
        })
    ).toThrow("Type User is invalid");
  });

  it("should throw an error for invalid CPF", () => {
    expect(
      () =>
        new User({
          firstName: "Alice",
          lastName: "Johnson",
          document: "123",
          email: "alice@example.com",
          password: "password123",
          balance: 1000,
          typeUser: "common",
        })
    ).toThrow("Invalid CPF.");
  });

  it("should throw an error for invalid email", () => {
    expect(
      () =>
        new User({
          firstName: "Bob",
          lastName: "Smith",
          document: "98765432109",
          email: "invalidemail",
          password: "password456",
          balance: 1000,
          typeUser: "common",
        })
    ).toThrow("Invalid email.");
  });

  it("should throw an error for invalid user type", () => {
    expect(
      () =>
        new User({
          firstName: "Charlie",
          lastName: "Brown",
          document: "56789012345",
          email: "charlie@example.com",
          password: "password789",
          balance: 1000,
          typeUser: "invalidtype",
        })
    ).toThrow("Type User is invalid.");
  });
});
