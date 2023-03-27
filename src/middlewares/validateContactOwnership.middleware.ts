import { Response, Request, NextFunction, response } from "express";


const validateContactOwnershipMiddleware = (req: Request, resp: Response, next: NextFunction) => { 
     const idClient = req.user.id;
     const IdContactOwner = req.contact.client.id
     
     if (idClient !== IdContactOwner) {
          return resp.status(409).json({"message": "Customer is not the creator of this contact "})
     }
  
     return next()
}


export {validateContactOwnershipMiddleware}