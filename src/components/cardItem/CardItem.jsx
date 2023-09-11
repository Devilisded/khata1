import React from "react";
import { IconUser } from "@tabler/icons-react";
import "./carditem.scss"
const CardItem = () => {
  return (
    <div className="cardItem cursor-pointer px-5">
      <div class="flex justify-between  items-center p-3 " style={{borderBottom:"1px solid rgb(245 245 245"}}>
        <div class="flex items-center gap-2">
          <div className="icon">
            <IconUser className=" text-blue-500"/>
          </div>
          <div class="flex flex-col gap-1">
            <span className="text-lg text-slate-700">John Doe</span>
            <span className="text-slate-500 text-sm">+91 9466210083</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-red-500 text-lg font-semibold">₹ 500</div>
            <div className="text-slate-700 text-xs">YOU'LL PAY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
