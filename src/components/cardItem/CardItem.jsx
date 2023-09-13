import React, { useEffect, useState } from "react";
import { IconUser } from "@tabler/icons-react";
import "./carditem.scss"
const CardItem = (props) => {
  const [type,setType]=useState(false);
  const check =()=>{
    if(props.users.type=="Get"){
      setType(true)
    }
  }
  useEffect(()=>{
    check()
  })
  return (
    <div className="cardItem cursor-pointer px-5" onClick={props.click}>
      <div className="flex justify-between  items-center p-3 " style={{borderBottom:"1px solid rgb(245 245 245"}}>
        <div className="flex items-center gap-2">
          <div className="icon">
            <IconUser className=" text-blue-500"/>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg text-slate-700">{props.users.name}</span>
            <span className="text-slate-500 text-sm">+91 9466210083</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end gap-1">
            <div className={type?"text-green-600 font-semibold text-lg":"text-red-600 font-semibold text-lg"}>{props.users.amount?'₹ '+props.users.amount:'-'}</div>
            <div className="text-slate-700 text-xs">{type?"You'll Receive":"You'll Pay"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
