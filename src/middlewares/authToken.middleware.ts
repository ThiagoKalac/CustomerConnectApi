import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

const authTokenMiddleware = async (request: Request, response: Response, next: NextFunction)=> {

     let authToken = request.headers.authorization

     if (!authToken) {
          return response.status(401).json({ message: "Missing authorization token." })
     }

     authToken = authToken.split(" ")[1]
     
     jwt.verify(authToken, process.env.SECRET_KEY, (error, decoded:any) => {
          
          if (error) {
               return response.status(401).json({message: error.message})
          }

          request.user = {
               id: decoded.sub as string,
          }
          
          return next()
     })
     
}

export {authTokenMiddleware}