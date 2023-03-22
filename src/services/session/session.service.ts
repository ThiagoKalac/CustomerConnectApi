import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/erros"
import { ISessionLogin } from "../../interfaces/session"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

const sessionLoginService = async (dataLogin:ISessionLogin):Promise<string> => {
     const clientRepository = AppDataSource.getRepository(Client)
     const keys = Object.keys(dataLogin)
     let client: Client

     if (!keys.includes("nickname") && !keys.includes("email")) {

          throw new AppError("Email or Nickname is obrigatory for login", 400);

     } else if (keys.includes("email")) {

          const email = dataLogin.email.toLocaleLowerCase().split(/\s+/).join('')
          client = await clientRepository.findOne({ where: { email: dataLogin.email } })

     } else if (keys.includes("nickname")) { 

          const nickname = dataLogin.nickname.toLocaleLowerCase().split(/\s+/).join('')
          client = await clientRepository.findOne({ where: { nickname: nickname } })
     }

     if (!client) { 
          throw new AppError("Wrong email/password",403)
     }

     const validationPassword = await compare(dataLogin.password, client.password)
     
     if (!validationPassword) {
          throw new AppError("Wrong email/password",403)
     }
     

     const token = jwt.sign(
          { },
          process.env.SECRET_KEY,
          {expiresIn: "24h", subject: client.id}
     )
     
     return token
     

}

export {sessionLoginService}