import { Router } from "express";
import { UserDb } from "../../Infra/localDataBase/UserDB";
import { CreateUserController } from "../controllers/CreateUserController";
import CreateUser from "../../data/services/CreateUser/CreateUser";
import { GetUsers } from "../../data/services/GetUser/GetUser";
import { GetUsersController } from "../controllers/GetUserController";
import TransactionDB from "../../Infra/localDataBase/TransactionDB";
import CreateTransaction from "../../data/services/CreateTransaction/CreateTransaction";
import CreateTransactionController from "../controllers/CreateTransacrionController";
import GetTransaction from "../../data/services/GetTransaction/GetTransaction";
import GetTransactionController from "../controllers/GetTransactionController";
import AuthorizationTransactionService from "../../data/services/AuthorizationTransaction/AuthorizationTransaciton";

const router = Router();
const userDb = new UserDb();
const transactionDb = new TransactionDB();

router.post("/user", async (req, res) => {
  const createUser = new CreateUser(userDb);
  const createUserController = new CreateUserController(createUser);
  return await createUserController.handle(req, res);
});

router.get("/user", async (req, res) => {
  const getUser = new GetUsers(userDb);
  const getUsersController = new GetUsersController(getUser);
  return await getUsersController.handle(req, res);
});

router.post("/transaction", async (req, res) => {
  const authorizationTransactionService = new AuthorizationTransactionService();
  const createTransaction = new CreateTransaction(
    transactionDb,
    userDb,
    authorizationTransactionService
  );
  const createTranactionController = new CreateTransactionController(
    createTransaction
  );
  return await createTranactionController.handle(req, res);
});

router.get("/transaction", async (req, res) => {
  const getTransacion = new GetTransaction(transactionDb);
  const getTransactionController = new GetTransactionController(getTransacion);
  return await getTransactionController.handle(req, res);
});
export default router;
