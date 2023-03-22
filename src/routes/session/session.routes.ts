import { Router } from "express";
import { sessionLoginController } from "../../controllers/session/session.controller";
import { dataValidationMiddleware } from "../../middlewares/dataValidation.middleware";
import { loginSessionSchema } from "../../schema/session/session.schema";




const sessionRouter = Router()

sessionRouter.post("", dataValidationMiddleware(loginSessionSchema),sessionLoginController)

export {sessionRouter}