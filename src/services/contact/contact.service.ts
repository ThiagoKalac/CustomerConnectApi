import { IContact, IContactRequest } from "../../interfaces/contact"
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { IClient } from "../../interfaces/client"
import { returnContactSchema } from "../../schema/contact/contact.schema"

const createdContactService = async (idClient:any, dataContact: IContactRequest): Promise<Object> => {
  
  const contactRepository = AppDataSource.getRepository(Contact)
 
  const createdContact = contactRepository.create({
    client: idClient,
    ...dataContact
  })

  const newContact = await contactRepository.save(createdContact)

  return newContact
}

const listContactService = async (client: IClient) => {
  const listContact = client.contact
  const validate = await returnContactSchema.validate(listContact)
  return validate
}

export {createdContactService, listContactService}