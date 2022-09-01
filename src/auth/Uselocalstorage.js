import React, { useState } from 'react'

function Uselocalstorage(itemname,initialvalue){

    const localstorageItem=localStorage.getItem(itemname);
    let parseItem;
    if(!localstorageItem){
      localStorage.setItem(itemname,JSON.stringify(initialvalue))
      parseItem=initialvalue;
    }else{
      parseItem =JSON.parse(localstorageItem)
    };
  
    const [Item, setItem] = useState(parseItem)
   
    const saveitem =(newI)=>{
      const strin =JSON.stringify(newI);
      localStorage.setItem(itemname,strin)
      setItem (newI)
     }
     return[
      Item,
      saveitem,
      parseItem
     ]
  }

export default Uselocalstorage