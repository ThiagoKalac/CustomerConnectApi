import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { IClient, IClientRequest } from "../../interfaces/client"
import { returnClientSchema } from "../../schema/client/client.schema"

const createdClientService = async (data:IClientRequest):Promise<IClient> => {
     const clientRepository = AppDataSource.getRepository(Client)
     const createdClient = clientRepository.create(data)
     await clientRepository.save(createdClient)

     const newClient = returnClientSchema.validate(createdClient, {
          stripUnknown: true
     })
     
     return newClient
}

export {createdClientService}