import { useContext } from "react"
import { AuthContex } from "./AuthProvaider"

export default function UseAuth() {
    const contexValue=useContext(AuthContex);
    return contexValue;
    
}