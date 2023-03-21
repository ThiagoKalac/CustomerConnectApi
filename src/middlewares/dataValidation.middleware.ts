import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const dataValidationMiddleware = (schema:AnySchema) => async (request: Request, response: Response, next: NextFunction) => {

     try {
          const validated = await schema.validate(request.body, {
               stripUnknown: true,
               abortEarly: false
          })

          request.body = validated
          return next()

     } catch (error) {
          
          return response.status(400).json({
               message: error.errors
          })
     }
      

}

export {dataValidationMiddleware}