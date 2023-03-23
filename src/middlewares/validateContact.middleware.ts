import { NextFunction, request, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const validateConctactMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
     const contactRepository = AppDataSource.getRepository(Contact)
     const idContact = req.params.id
     
     const contactExist = await contactRepository.findOne({
          where: { id: idContact },
          relations: ['client']
     })
     
     if (!contactExist) {
          return resp.status(404).json({"message":"user not found or don't exist"})
     }

     req.contact = contactExist
   
     return next()
}

export {validateConctactMiddleware}