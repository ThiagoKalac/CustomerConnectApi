import express from "express"
import 'express-async-errors';
import "reflect-metadata"
import { clientRouters } from "./routes/client.routes";


const app = express()
app.use(express.json())

app.use("/client", clientRouters)

export default app
