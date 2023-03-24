import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const dataValidationMiddleware = (schema:AnySchema) => async (req: Request, resp: Response, next: NextFunction) => {

     try {
          const validated = await schema.validate(req.body, {
               stripUnknown: true,
               abortEarly: false
          })

          req.body = validated
          return next()

     } catch (error) {
          
          return resp.status(400).json({
               message: error.errors
          })
     }
      

}

export {dataValidationMiddleware}