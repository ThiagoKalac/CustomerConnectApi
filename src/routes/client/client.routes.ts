import { Router } from "express";
import {createdClientController,updateClientController,deleteClientController,retriveClientController} from "../../controllers/client/client.controller";
import { availabilityCheckerMiddleware } from "../../middlewares/availabilityChecker.middleware";
import { dataValidationMiddleware } from "../../middlewares/dataValidation.middleware";
import {createdClientSchema,updateClientSchema} from "../../schema/client/client.schema";

const clientRouters = Router();

clientRouters.get("", retriveClientController);

clientRouters.post("",
  dataValidationMiddleware(createdClientSchema),
  availabilityCheckerMiddleware,
  createdClientController
);

clientRouters.patch("",
  dataValidationMiddleware(updateClientSchema),
  updateClientController
);

clientRouters.delete("", deleteClientController);

export { clientRouters };
