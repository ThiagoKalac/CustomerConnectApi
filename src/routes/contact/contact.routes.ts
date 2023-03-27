import { Router } from "express";
import { createdContactController, deleteContactController, listContactController, updateContactController } from "../../controllers/contact/contact.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { dataValidationMiddleware } from "../../middlewares/dataValidation.middleware";
import { getOwnerOfTokenMiddleware } from "../../middlewares/getOwnerOfToken.middleware";
import { validateConctactMiddleware } from "../../middlewares/validateContact.middleware";
import { validateContactOwnershipMiddleware } from "../../middlewares/validateContactOwnership.middleware";
import { createdContactSchema, updadteContactSchame } from "../../schema/contact/contact.schema";

const contactRouters = Router();

contactRouters.get("",authTokenMiddleware,getOwnerOfTokenMiddleware,listContactController)
contactRouters.post("",
     authTokenMiddleware,
     getOwnerOfTokenMiddleware,
     dataValidationMiddleware(createdContactSchema),
     createdContactController
)
contactRouters.patch("/:id",
     authTokenMiddleware,
     getOwnerOfTokenMiddleware,
     validateConctactMiddleware,
     validateContactOwnershipMiddleware,
     dataValidationMiddleware(updadteContactSchame),
     updateContactController
)
contactRouters.delete("/:id",
     authTokenMiddleware,
     getOwnerOfTokenMiddleware,
     validateConctactMiddleware,
     validateContactOwnershipMiddleware,
     deleteContactController
)

export {contactRouters}