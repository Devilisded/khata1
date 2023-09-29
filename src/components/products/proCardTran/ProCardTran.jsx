import { IconEdit } from "@tabler/icons-react";
import Img from "../../../assets/proIcon.png";
import "./procardtran.scss"
//import { useContext } from "react";
//import { UserContext } from "../../../context/UserIdContext";
//import products from "../../../pages/products/productsdata";
const ProCardTran = (props) => {
  //const {pId}=useContext(UserContext)
  //console.log("pId : ",pId)
  return (
    <div className="cardItem1 cursor-pointer">
      {/* {
        products.filter((persons)=>persons.pId===pId).map((people)=>(           */}
    <div
      className="flex justify-between  items-center p-3 "
      style={{ borderBottom: "1px solid rgb(245 245 245" }}
      //key={pId}
    >
      <div className="flex items-center gap-4">
        <div className="icon">
          <img src={Img} className="w-7" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg text-slate-700">{props.product_name}</span>
        </div>
      </div>
      <button className="flex gap-1 items-center editbtn text-blue-600" onClick={props.edit}><IconEdit />Edit Product</button>
    </div>
          {/* ))
      } */}
  </div>
  )
}

export default ProCardTran