import { IContact, IContactRequest, IContactUpdate } from "../../interfaces/contact"
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { IClient } from "../../interfaces/client"
import { returnContactSchema, returnUpdateContactSchema } from "../../schema/contact/contact.schema"

const createdContactService = async (idClient:any, dataContact: IContactRequest): Promise<Object> => {
  
  const contactRepository = AppDataSource.getRepository(Contact)
 
  const createdContact = contactRepository.create({
    client: idClient,
    ...dataContact
  })

  const newContact = await contactRepository.save(createdContact)

  return newContact
}

const listContactService = async (client: IClient):Promise<Object> => {
  const listContact = client.contact
  const validate = await returnContactSchema.validate(listContact)
  return validate
}

const deleteContactService = async (idContact:string):Promise<void> => { 
  const contactRepository = AppDataSource.getRepository(Contact)
  await contactRepository.delete(idContact)
}

const updateContactService = async (dataUpdate: IContactUpdate, contact: IContact):Promise<Object> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  
  const {client, ...currentData} = contact
  
  const updated = contactRepository.create({
    ...currentData,
    ...dataUpdate
  })
  
  const updateContact = await contactRepository.save(updated)
  
  const validate = await returnUpdateContactSchema.validate(updateContact)
  return validate
}

export {createdContactService, listContactService, deleteContactService,updateContactService}