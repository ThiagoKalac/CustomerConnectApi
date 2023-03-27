import AppDataSource from "../data-source"
import { NextFunction, Request, Response } from "express";
import { Client } from "../entities/client.entity";


const availabilityCheckerMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
     const clientRepository = AppDataSource.getRepository(Client)
     const email = req.body.email.toLowerCase().split(/\s+/).join('');
     const nickname = req.body.nickname.toLowerCase().split(/\s+/).join('');

     
     if (nickname && email) {
          const emailExist = await clientRepository.findOne({where: { email: email }})
          const nicknameExist = await clientRepository.findOne({ where: { nickname: nickname } })
          
          if (emailExist) { 
               return resp.status(409).json({message:"E-mail already registered"})
          }    

          if (nicknameExist) { 
               return resp.status(409).json({message:"Nickname already registered"})
          }
     }
     

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