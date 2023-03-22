import express from "express"
import 'express-async-errors';
import "reflect-metadata"
import { errorHandle } from "./errors/erros";
import { clientRouters } from "./routes/client/client.routes";
import { sessionRouter } from "./routes/session/session.routes";


const app = express()
app.use(express.json())

app.use("/client", clientRouters)
app.use("/login", sessionRouter)

app.use(errorHandle)
 
export default app
