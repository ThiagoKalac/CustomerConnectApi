import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/erros"
import { ISessionLogin } from "../../interfaces/session"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

const sessionLoginService = async (dataLogin):Promise<string> => {
     const clientRepository = AppDataSource.getRepository(Client)
     const keys = Object.keys(dataLogin)
     let client: Client
     
     console.log(dataLogin)
     const customerSessionByEmail = await clientRepository.findOne({ where: { email: dataLogin.emailOrNickname } })

     if (!customerSessionByEmail) {
          const customerSessionByNickname = await clientRepository.findOne({ where: { nickname: dataLogin.emailOrNickname } })

          if (!customerSessionByNickname) {
               throw new AppError("Wrong email or nickname/password",403)
          } else {
               client = customerSessionByNickname
          }
     } else {
          client = customerSessionByEmail
     }

     const validationPassword = await compare(dataLogin.password, client.password)
     
     if (!validationPassword) {
          throw new AppError("Wrong email or nickname/password",403)
     }
     

     const token = jwt.sign(
          { },
          process.env.SECRET_KEY,
          {expiresIn: "24h", subject: client.id}
     )
     
     return token
     

}

export {sessionLoginService}