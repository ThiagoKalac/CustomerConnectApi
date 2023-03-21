import express from "express"
import 'express-async-errors';
import "reflect-metadata"
import { errorHandle } from "./errors/erros";
import { clientRouters } from "./routes/client/client.routes";


const app = express()
app.use(express.json())

app.use("/client", clientRouters)

app.use(errorHandle)
 
export default app
