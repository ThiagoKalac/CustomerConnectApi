import { NextFunction, Request, Response } from "express"



class AppError extends Error{
      public message: string
      public statusCode: number

     constructor(message:string, statusCode:number = 400) {
          super()
          this.message =  message  
          this.statusCode = statusCode
     }
 }

const errorHandle = (error:Error , request:Request, response:Response, next:NextFunction) => {

     if (error instanceof AppError) {
          return response.status(error.statusCode).json({message:error.message})
     }

     if (error.message.includes("invalid input syntax")) {
          return response.status(404).json({ message: "Syntax invalid of id" })
     }

     console.log(error)

     return response.status(500).json({message: 'Internal serve error'})
}


export {AppError, errorHandle}   