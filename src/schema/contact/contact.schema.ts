import * as yup from "yup";
import { IContact, IContactRequest, IContactUpdate } from "../../interfaces/contact/index"


const createdContactSchema: yup.SchemaOf<IContactRequest> = yup.object().shape({
     nickname: yup.string().required(),
     fullName: yup.string().required(),
     telephone: yup
     .string()
     .required()
     .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/,"Invalid phone number"),
     telephonesExtra: yup
     .array()
     .of(yup.string().matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Extra invalid phone number"))
          .nullable()
          .notRequired(),
     email: yup.string().email().required(),
     emailsExtra: yup.array().of(yup.string().email()).nullable().notRequired(),
})


export {createdContactSchema}