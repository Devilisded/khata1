import { IconUser } from "@tabler/icons-react"
import { useState,useEffect, useContext } from "react";
import "./supcard.scss"
import { UserContext } from "../../../context/UserIdContext";

const SupCard = (props) => {
  const {changeSup,supId}=useContext(UserContext);
  const [type,setType]=useState(false);
  const check =()=>{
    if(props.data.type=="Get"){
      setType(true)
    }
  }
  useEffect(()=>{
    check()
  })
  return (
    <div className={supId===props.data.supId?"bg-[#e8f0fe] cardItem cursor-pointer shadow":"cardItem cursor-pointer"} onClick={()=>changeSup(props.data.supId)}>
    <div className="flex justify-between  items-center p-3 " style={{borderBottom:"1px solid rgb(245 245 245"}}>
      <div className="flex items-center gap-2">
        <div className="icon">
          <IconUser className=" text-blue-500"/>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg text-slate-700">{props.data.name}</span>
          <span className="text-slate-500 text-sm">{props.data.number}</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end gap-1">
          <div className={type?"text-green-600 font-semibold text-lg":"text-red-600 font-semibold text-lg"}>{props.data.amount?'₹ '+props.data.amount:'-'}</div>
          <div className="text-slate-700 text-xs">{type?"You'll Receive":"You'll Pay"}</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SupCard