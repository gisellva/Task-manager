import React, { useState } from 'react'
function UseLocalStorage(item,initial) {
    const localstorageproject=localStorage.getItem(initial)
    let Parseproject;
    if (!localstorageproject) {
      localStorage.setItem(item,JSON.stringify([]))
      Parseproject=initial
    }else{
      Parseproject= JSON.parse(localstorageproject)
    };
    const [proyectsa, setproyectsa] = useState(Parseproject)
    const saveproject =(newprojects)=>{
      const stri=JSON.stringify(newprojects)
      localStorage.setItem(item,stri)
      setproyectsa(newprojects)
     };
    return[
      proyectsa,saveproject
    ]
  }
export default UseLocalStorage