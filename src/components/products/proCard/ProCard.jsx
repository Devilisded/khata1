import { useContext } from "react";
import Img from "../../../assets/proIcon.png";
import { UserContext } from "../../../context/UserIdContext";
const ProCard = (props) => {
  const {changeProduct,pId}=useContext(UserContext)
  return (
    <div className={pId===props.data.pId?"bg-[#e8f0fe] cardItem cursor-pointer shadow":"cardItem cursor-pointer"} onClick={()=>changeProduct(props.data.pId)}>
      <div
        className="flex justify-between  items-center p-3 "
        style={{ borderBottom: "1px solid rgb(245 245 245" }}
      >
        <div className="flex items-center gap-4 w-[200px]">
          <div className="icon">
            <img src={Img} className="w-7" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg text-slate-700">{props.data.pname}</span>
          </div>
        </div>
        <div className="w-[95px]">
          <div className="text-slate-800 text-lg">₹ {props.data.amount}</div>
        </div>
        <div className="w-[70px]">
            <div className="qty text-slate-800 text-lg">{props.data.qty}</div>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
