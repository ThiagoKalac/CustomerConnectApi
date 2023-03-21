import { response, Router } from "express";
import { createdClientController, updateClientController, deleteClientController,retriveClientController  } from "../controllers/client.controller";

const clientRouters = Router();

clientRouters.get("", retriveClientController);
clientRouters.post("", createdClientController);
clientRouters.patch("",updateClientController);
clientRouters.delete("", deleteClientController);

export {clientRouters}