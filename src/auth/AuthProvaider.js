import {  createContext, useState } from "react";
import roles from "../herpser/roles";

 export const AuthContex = createContext()

 export default function AuthProvaider({children}) {
   const [user, setuser] = useState(null) 
   const [add, setadd] = useState([])
   const addproject=(title ,descipcion)=>{
     const newp =[...add]
     newp.push({
      title ,
      descipcion
     });
     setadd(newp)
   }
   const deleteprojects=(title)=>{
    const newproject=[...add]
    const projectindex=newproject.findIndex(pro=>pro.title !== title)
    newproject.splice(projectindex,1)
    setadd(newproject)
    }
   const islogged=()=> !!user;
   const hasRol=(rol)=> user?.rol==rol
   const login =(userCredencial)=>setuser({rol:roles.administrador,name:"heidy",mail:"gisell@admi.com"})
   const logout=()=>setuser(null)
  
   const updateuser=(data)=>{
    setuser({
      ...user,
      ...data
    })
   }
   
   const contexValue={
      user,
      islogged,
      hasRol,
      login,
      logout,
      updateuser,
      add, 
      setadd,
      addproject,
      deleteprojects
    };
    
    return(
        <AuthContex.Provider value={contexValue}>
         {children}
        </AuthContex.Provider>
    )
 }