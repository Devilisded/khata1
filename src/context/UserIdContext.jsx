import { createContext, useState } from "react";

export const UserContext=createContext()

export const UserContextProvider=({children})=>{
    const [userId,setUserId]=useState(0)
    const changeUser=(id)=>{
        setUserId(id);
    }
    return(
        <UserContext.Provider value={{userId,changeUser}}>
            {children}
        </UserContext.Provider>
    )
}