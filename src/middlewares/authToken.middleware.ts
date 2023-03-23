import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

const authTokenMiddleware = async (req: Request, resp: Response, next: NextFunction)=> {

     let authToken = req.headers.authorization

     if (!authToken) {
          return resp.status(401).json({ message: "Missing authorization token." })
     }

     authToken = authToken.split(" ")[1]
     
     jwt.verify(authToken, process.env.SECRET_KEY, (error, decoded:any) => {
          
          if (error) {
               return resp.status(401).json({message: error.message})
          }

          req.user = {
               id: decoded.sub as string,
          }
          
          return next()
     })
     
}

export {authTokenMiddleware}