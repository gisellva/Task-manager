import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

const schema=yup.object().shape(
    {
        password:yup
        .string(" the new password must be a text")
        .required("enter the password")
        .min(8, "the password must have 8 characters minimum")
    }

)
export default yupResolver(schema)