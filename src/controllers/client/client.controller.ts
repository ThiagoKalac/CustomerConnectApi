import { Request, Response } from "express"
import { createdClientService, deleteClientService, retriveClientService, updateClientService } from "../../services/client/client.service"

const createdClientController = async (req: Request, resp: Response) => { 
     const data = req.body
     const client = await createdClientService(data)
     return resp.status(201).json(client)
}
const updateClientController = async (req: Request, resp: Response) => {
     const client = req.user
     const dataUpdate = req.body
     const clientUpdate = await updateClientService(client, dataUpdate)
     return resp.status(200).json(clientUpdate)
}
const deleteClientController = async (req: Request, resp: Response) => { 
     const id = req.user.id
     await deleteClientService(id)
     return resp.status(204).json({})
}

const retriveClientController = async (req: Request, resp: Response) => {
     const client = req.user
     const clientData = await retriveClientService(client)
     return resp.status(200).json(clientData)
}

export {createdClientController, updateClientController, deleteClientController,retriveClientController }