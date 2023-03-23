import { IContact, IContactRequest } from "../../interfaces/contact"
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"

const createdContactService = async (idClient:any, dataContact: IContactRequest): Promise<Object> => {
  
  const contactRepository = AppDataSource.getRepository(Contact)
 
  const createdContact = contactRepository.create({
    client: idClient,
    ...dataContact
  })

  const newContact = await contactRepository.save(createdContact)

  return newContact
}

export {createdContactService}