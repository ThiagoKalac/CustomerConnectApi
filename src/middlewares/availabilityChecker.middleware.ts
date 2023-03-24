import AppDataSource from "../data-source"
import { NextFunction, Request, Response } from "express";
import { Client } from "../entities/client.entity";


const availabilityCheckerMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
     const clientRepository = AppDataSource.getRepository(Client)
     const email = req.body.email;
     const nickname = req.body.nickname;

     if (!email && nickname) {
          const nicknameExist = await clientRepository.findOne({where: { nickname: nickname }})
          
          if (nicknameExist) { 
               return resp.status(409).json({message:"Nickname already registered"})
          }
     }

     if (!nickname && email) {
          const emailExist = await clientRepository.findOne({where: { email: email }})
          
          if (emailExist) { 
               return resp.status(409).json({message:"E-mail already registered"})
          }    
     }

     return next()
}


export { availabilityCheckerMiddleware}