import * as yup from "yup";
import { ISessionLogin } from "../../interfaces/session";

const loginSessionSchema: yup.SchemaOf<ISessionLogin> = yup.object().shape({
  emailOrNickname: yup.string().required(), 
  password: yup.string().min(5).required(),
});



export {loginSessionSchema}