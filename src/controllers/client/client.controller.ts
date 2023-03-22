import { Request, Response } from "express"
import { createdClientService } from "../../services/client/client.service"

const createdClientController = async (res: Request, resp: Response) => { 
     const data = res.body
     const client = await createdClientService(data)
     return resp.status(201).json(client)
}
const updateClientController = (res: Request, resp: Response) => { 
     return resp.status(201).json("chegou no controler")
}
const deleteClientController = (res: Request, resp: Response) => { 
     return resp.status(201).json("chegou no controler")
}

const retriveClientController = (res: Request, resp: Response) => { 
     return resp.status(201).json("chegou no controler")
}

export {createdClientController, updateClientController, deleteClientController,retriveClientController }