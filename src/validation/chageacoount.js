import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

const schema=yup.object().shape(
    {
        name:yup
          .string(" the name must be a text")
          .required("you must enter a name"),
        Mail:yup
        .string(" the name must be a text")
        .required("you must enter a name")
        .email(" You must enter a valid email"),
        rol:yup
        .string("the role must be a text")
        .oneOf(["regular","administrator"])

    }

)
export default yupResolver(schema)