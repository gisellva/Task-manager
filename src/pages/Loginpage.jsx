import React from 'react'
import { useLocation } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'

const Loginpage = () => {
    const location=useLocation();
   
   const userCredencial={
    
   }
    const {login}=UseAuth();
    return(
        <>
        <div>Loginpage hola</div>
         <button onClick={()=>login(userCredencial)}>open session</button>   
        </>

    )
}

export default Loginpage
