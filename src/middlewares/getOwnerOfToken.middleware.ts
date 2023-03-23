import { Response, Request, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";

const getOwnerOfTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
     const clientRepository = AppDataSource.getRepository(Client)
     const id = req.user.id
     const client = await clientRepository.findOne({
          where: { id: id },
          relations: ['contact'] 
     }) 
     
     if (!client) {
          res.status(409).json({ message: "user not exist" })
     }
     req.user = {
          client
     }
     
     return next();
}

export {getOwnerOfTokenMiddleware}