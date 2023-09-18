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
    return(
        <UserContext.Provider value={{userId,changeUser,supId,changeSup}}>
            {children}
        </UserContext.Provider>
    )
}