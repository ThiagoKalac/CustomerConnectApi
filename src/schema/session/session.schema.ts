import * as yup from "yup";
import { ISessionLogin } from "../../interfaces/session";

const loginSessionSchema: yup.SchemaOf<ISessionLogin> = yup.object().shape({
  email: yup.string().email().notRequired(),
  nickname: yup.string().notRequired(),
  password: yup.string().min(5).required(),
});


export {loginSessionSchema}