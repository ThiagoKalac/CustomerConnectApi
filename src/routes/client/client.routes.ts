import { Router } from "express";
import {createdClientController,updateClientController,deleteClientController,retriveClientController} from "../../controllers/client/client.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { availabilityCheckerMiddleware } from "../../middlewares/availabilityChecker.middleware";
import { dataValidationMiddleware } from "../../middlewares/dataValidation.middleware";
import { getOwnerOfTokenMiddleware } from "../../middlewares/getOwnerOfToken.middleware";
import {createdClientSchema,updateClientSchema} from "../../schema/client/client.schema";

const clientRouters = Router();

clientRouters.get("", authTokenMiddleware,getOwnerOfTokenMiddleware,retriveClientController);

clientRouters.post("",
  dataValidationMiddleware(createdClientSchema),
  availabilityCheckerMiddleware,
  createdClientController
);

clientRouters.patch("",
  authTokenMiddleware,
  availabilityCheckerMiddleware,
  dataValidationMiddleware(updateClientSchema),
  getOwnerOfTokenMiddleware,
  updateClientController
);

clientRouters.delete("", authTokenMiddleware,getOwnerOfTokenMiddleware,deleteClientController);

export { clientRouters };
