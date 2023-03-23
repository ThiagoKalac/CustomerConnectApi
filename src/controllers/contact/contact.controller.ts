import { Response, Request } from "express";
import { createdContactService } from "../../services/contact/contact.service";

const createdContactController = async (req: Request, resp: Response) => { 
     const idClient = req.user.client.id
     const dataContact = req.body
     const newContact = await createdContactService(idClient,dataContact)
     return resp.status(201).json(newContact)
}


export {createdContactController}