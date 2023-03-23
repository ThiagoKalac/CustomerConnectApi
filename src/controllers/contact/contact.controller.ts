import { Response, Request } from "express";
import { createdContactService, listContactService } from "../../services/contact/contact.service";

const createdContactController = async (req: Request, resp: Response) => { 
     const idClient = req.user.client.id
     const dataContact = req.body
     const newContact = await createdContactService(idClient,dataContact)
     return resp.status(201).json(newContact)
}

const listContactController = async (req: Request, resp: Response) => {
     const client = req.user.client
     const listContacts = await listContactService(client)
     return resp.status(200).json(listContacts)
}

export {createdContactController, listContactController}