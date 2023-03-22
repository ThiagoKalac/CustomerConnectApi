import AppDataSource from "../data-source"
import { NextFunction, Request, Response } from "express";
import { Client } from "../entities/client.entity";


const availabilityCheckerMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
     
     const clientRepository = AppDataSource.getRepository(Client)

     const emailExist = await clientRepository.findOne({where: { email: req.body.email }})
     const nicknameExist = await clientRepository.findOne({where: { nickname: req.body.nickname }})

     if (emailExist) { 
          return resp.status(409).json({message:"E-mail already registered"})
     }

     if (nicknameExist) { 
          return resp.status(409).json({message:"Nickname already registered"})
     }

     return next()
}


export { availabilityCheckerMiddleware}