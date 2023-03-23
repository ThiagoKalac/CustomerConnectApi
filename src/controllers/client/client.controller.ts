import { Request, Response } from "express"
import { createdClientService, deleteClientService, retriveClientService } from "../../services/client/client.service"

const createdClientController = async (req: Request, resp: Response) => { 
     const data = req.body
     const client = await createdClientService(data)
     return resp.status(201).json(client)
}
const updateClientController = (req: Request, resp: Response) => { 
     return resp.status(201).json("chegou no controler")
}
const deleteClientController = async (req: Request, resp: Response) => { 
     const id = req.user.id
     await deleteClientService(id)
     return resp.status(204).json({})
}

const retriveClientController = async (req: Request, resp: Response) => {
     const client = req.user.client
     const clientData = await retriveClientService(client)
     return resp.status(200).json(clientData)
}

export {createdClientController, updateClientController, deleteClientController,retriveClientController }