import express from "express";
import router from "./aplication/routes/route";
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(8080, () => console.log("Serve running in port 8080"));
