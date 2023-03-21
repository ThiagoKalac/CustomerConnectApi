import { Request, Response } from "express"

const createdClientController = (res: Request, resp: Response) => { 
     return resp.status(201).json("chegou no controler")
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