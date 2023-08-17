import express from "express";
import routerUser from "./aplication/routes/user.routes";
const app = express();
app.use(express.json());

app.use("/user", routerUser);

app.listen(8080, () => console.log("Serve running in port 8080"));
