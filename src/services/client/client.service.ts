import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { IClient, IClientRequest, IClientUpdate } from "../../interfaces/client"
import { returnClientSchema } from "../../schema/client/client.schema"

const createdClientService = async (data:IClientRequest):Promise<IClient> => {
     const clientRepository = AppDataSource.getRepository(Client)
     
     data.nickname = data.nickname.toLowerCase().split(/\s+/).join('')
     data.email = data.email.toLowerCase().split(/\s+/).join('')
     
     const createdClient = clientRepository.create(data)
     await clientRepository.save(createdClient)

     const newClient = await returnClientSchema.validate(createdClient, {
          stripUnknown: true
     })
     
     return newClient
}



const deleteClientService = async (id:string):Promise<void> => {
     const clientRepository = AppDataSource.getRepository(Client)
     
     clientRepository.delete(id)
     
}
const retriveClientService = async (client: IClient):Promise<IClient> => {
     const validade = await returnClientSchema.validate(client, {
          stripUnknown: true
     })

     return validade
}

const updateClientService = async (client: IClient, dataUpdate:IClientUpdate):Promise<IClient>=> { 
     const clientRepository = AppDataSource.getRepository(Client)
     const { contact, ...currentData } = client
     
     const update = clientRepository.create({
          ...currentData,
          ...dataUpdate
     }) 

     const updateClient = await clientRepository.save(update) 
     const validade = await returnClientSchema.validate(updateClient, {
          stripUnknown: true
     })

     return validade

}

export {createdClientService,  deleteClientService, retriveClientService, updateClientService}