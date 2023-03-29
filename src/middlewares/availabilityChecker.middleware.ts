import AppDataSource from "../data-source"
import { NextFunction, Request, Response } from "express";
import { Client } from "../entities/client.entity";

const availabilityCheckerMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
     const clientRepository = AppDataSource.getRepository(Client)
     const email = req.body.email?.toLowerCase().split(/\s+/).join('');
     const nickname = req.body.nickname?.toLowerCase().split(/\s+/).join('');
     const idRequest = req.user?.id 

     if (!idRequest) {
          const clientEmailExist = await clientRepository.findOne({where: { email: email }})
          const clientNicknameExist = await clientRepository.findOne({ where: { nickname: nickname } })

          if (clientEmailExist) {
               return resp.status(409).json({message:"E-mail already registered"})      
          }
          if (clientNicknameExist) {
               return resp.status(409).json({ message: "Nickname already registered" })
          }
          return next()
     }
     else {
          if (nickname && email) {
               const clientEmailExist = await clientRepository.findOne({ where: { email: email } })
               const clientNicknameExist = await clientRepository.findOne({ where: {nickname: nickname } })
          
               if (clientEmailExist && clientEmailExist.id !== idRequest) {
                    return resp.status(409).json({ message: "E-mail already registered" })
               }

               if (clientNicknameExist && clientNicknameExist.id !== idRequest) {
                    return resp.status(409).json({ message: "Nickname already registered" })
               }

               return next()
          }

          if (!nickname && email) {
               const clientEmailExist = await clientRepository.findOne({ where: { email: email } })
               
               if (clientEmailExist && clientEmailExist.id !== idRequest) { 
                    return resp.status(409).json({message:"E-mail already registered"})
               }  

               return next()
          }

          if (nickname && !email) { 
               const clientNicknameExist = await clientRepository.findOne({ where: { nickname: nickname } })
               
               if (clientNicknameExist && clientNicknameExist.id !== idRequest) {
                    return resp.status(409).json({message:"Nickname already registered"})
               }
               return next()
          }
               
     }
  
}


export { availabilityCheckerMiddleware}