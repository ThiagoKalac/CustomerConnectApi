import * as yup from "yup";
import {
  IClient,
  IClientRequest,
  IClientUpdate,
} from "../../interfaces/client/index";

const createdClientSchema: yup.SchemaOf<IClientRequest> = yup.object().shape({
  nickname: yup.string().required(),
  fullName: yup.string().required(),
  telephone: yup
    .string()
    .required()
    .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/,"Telefone inválido"),
    telephonesExtra: yup
    .array()
    .of(yup.string().matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Telefone extra inválido"))
     .nullable()
     .notRequired(),
  email: yup.string().email().required(),
  emailsExtra: yup.array().of(yup.string().email()).nullable().notRequired(),
  password: yup.string().min(5).required(),
});

const updateClientSchema: yup.SchemaOf<IClientUpdate> = yup.object().shape({
     nickname: yup.string().notRequired(),
     fullName: yup.string().notRequired(),
     telephone: yup
          .string()
          .matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Invalid phone number")
          .notRequired(),
     telephonesExtra: yup
          .array()
          .of(yup.string().matches(/^\(?[0-9]{2}\)?[\s-]?9?[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/, "Extra invalid phone number"))
          .notRequired(),
     email: yup.string().email().notRequired(),
     emailsExtra: yup.array().of(yup.string().email()).notRequired(),
     password: yup.string().min(5).notRequired(),
});

const returnClientSchema: yup.SchemaOf<IClient> = yup.object().shape({
     id: yup.string().notRequired(),
     nickname: yup.string().notRequired(),
     fullName: yup.string().notRequired(),
     telephone: yup.string().notRequired(),
     telephonesExtra: yup.array().nullable().notRequired(),
     email: yup.string().notRequired(),
     emailsExtra: yup.array().nullable().notRequired(),
     createdAt: yup.date().notRequired()
});


export { createdClientSchema, updateClientSchema, returnClientSchema};
