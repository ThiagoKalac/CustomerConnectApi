import { Request, Response } from "express"
import { sessionLoginService } from "../../services/session/session.service"

const sessionLoginController = async (req:Request , resp:Response) => {
     const dataLogin = req.body
     const token = await sessionLoginService(dataLogin)

     return resp.status(200).json({ token })
}

export {sessionLoginController}