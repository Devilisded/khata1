import { createContext, useState } from "react";

export const UserContext=createContext()

export const UserContextProvider=({children})=>{
    const [userId,setUserId]=useState(0)
    const changeUser=(id)=>{
        setUserId(id);
    }
    const [supId,setSupId]=useState(0)
    const changeSup=(sup)=>{
        setSupId(sup)
    }
    const [pId,setPId]=useState(0)
    const changeProduct=(pid)=>{
        setPId(pid)
    }
    const [serId,setSerId]=useState(0)
    const changeService =(serid)=>{
        setSerId(serid)
    }
    return(
        <UserContext.Provider value={{userId,changeUser,supId,changeSup,pId,changeProduct,serId,changeService}}>
            {children}
        </UserContext.Provider>
    )
}