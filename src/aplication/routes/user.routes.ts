import { Router } from "express";
import { UserDb } from "../../Infra/localDataBase/UserDB";
import { CreateUserController } from "../controllers/CreateUserController";
import CreateUser from "../../data/services/CreateUser/CreateUser";
import { GetUsers } from "../../data/services/GetUser/GetUser";
import { GetUsersController } from "../controllers/GetUserController";

const routerUser = Router();
const userDb = new UserDb();

routerUser.post("/", async (req, res) => {
  const createUser = new CreateUser(userDb);
  const createUserController = new CreateUserController(createUser);
  return await createUserController.handle(req, res);
});

routerUser.get("/", async (req, res) => {
  const getUser = new GetUsers(userDb);
  const getUsersController = new GetUsersController(getUser);
  return await getUsersController.handle(req, res);
});

export default routerUser;
