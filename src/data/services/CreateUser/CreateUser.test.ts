import CreateUser from "./CreateUser"; // Importe o módulo apropriado
import { CreateUserDTO } from "../../../domain/DTO/CreateUserDTO";
import User from "../../../domain/entities/User";
import { UserRepository } from "../../Contracts/UserRepository";

const userData: CreateUserDTO = {
  firstName: "John",
  lastName: "Doe",
  document: "62803120380",
  email: "john@example.com",
  password: "password",
  balance: 100,
  typeUser: "common",
};

describe("CreateUser", () => {
  it("should create a new user when valid data is provided", async () => {
    const mockUserRepository: UserRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      findPayer: jest.fn().mockResolvedValue(null),
      findPayee: jest.fn().mockResolvedValue(null),
      findByDocument: jest.fn().mockResolvedValue(null),
      save: jest.fn().mockResolvedValue(userData),
      getUsers: jest.fn().mockResolvedValue([]),
      correctionValues: jest.fn().mockResolvedValue(null),
    };

    const createUser = new CreateUser(mockUserRepository);

    await createUser.execute(userData);

    // UserRepository methods are called as expected
    expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(userData.email);
    expect(mockUserRepository.findByDocument).toHaveBeenCalledWith(
      userData.document
    );
    expect(mockUserRepository.save).toHaveBeenCalledWith(expect.any(User));
  });

  it("should throw an error if email already exists", async () => {
    const mockUserRepository: UserRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      findPayer: jest.fn().mockResolvedValue(null),
      findPayee: jest.fn().mockResolvedValue(null),
      findByDocument: jest.fn().mockResolvedValue(null),
      save: jest.fn().mockResolvedValue(userData),
      getUsers: jest.fn().mockResolvedValue([]),
      correctionValues: jest.fn().mockResolvedValue(null),
    };

    const createUser = new CreateUser(mockUserRepository);

    await expect(createUser.execute(userData)).rejects.toThrow(
      "Email already exists"
    );
  });

  it("should throw an error if document already exists", async () => {
    const mockUserRepository: UserRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      findPayer: jest.fn().mockResolvedValue(null),
      findPayee: jest.fn().mockResolvedValue(null),
      findByDocument: jest.fn().mockResolvedValue(null),
      save: jest.fn().mockResolvedValue(userData),
      getUsers: jest.fn().mockResolvedValue([]),
      correctionValues: jest.fn().mockResolvedValue(null),
    };

    const createUser = new CreateUser(mockUserRepository);

    await expect(createUser.execute(userData)).rejects.toThrow(
      "CPF already exists"
    );
  });

  it("should throw an error if balance is less than 0", async () => {
    const user: CreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      document: "62803120380",
      email: "john@example.com",
      password: "password",
      balance: -100,
      typeUser: "common",
    };

    const mockUserRepository: UserRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      findPayer: jest.fn().mockResolvedValue(null),
      findPayee: jest.fn().mockResolvedValue(null),
      findByDocument: jest.fn().mockResolvedValue(null),
      save: jest.fn().mockResolvedValue(userData),
      getUsers: jest.fn().mockResolvedValue([]),
      correctionValues: jest.fn().mockResolvedValue(null),
    };
    const createUser = new CreateUser(mockUserRepository);

    await expect(createUser.execute(user)).rejects.toThrow(
      "The balance cannot be less than 0"
    );
  });
});
