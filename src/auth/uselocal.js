import React from "react";
import { useState } from "react";
function UseLocalStorage(item,initial) {
    const [proyectsa, setproyectsa] = useState(initial)
    const [loading, setloading] = React.useState(true)
    React.useEffect(() => {
      setTimeout(()=>{
        const localstorageprojects=localStorage.getItem(initial)
        let Parseproject;
        if (!localstorageprojects) {
        localStorage.setItem(item,JSON.stringify([]))
        Parseproject=initial
       }else{
          Parseproject= JSON.parse(localstorageprojects)
        };
        setproyectsa(Parseproject)
        setloading(false)
      },3000)
    }, [])
   
   
    const saveproject =(newprojects)=>{
      const stri=JSON.stringify(newprojects)
      localStorage.setItem(item,stri)
      setproyectsa(newprojects)
     };

     const add=(title,descipcion,proyect)=>{
      const newproject=[...proyectsa]
     newproject.push({
      title,
      descipcion,
      proyect
     })
      saveproject(newproject)
      }
    return{
      proyectsa,saveproject,loading,add
    }
  }
export {UseLocalStorage}