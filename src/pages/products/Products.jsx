import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import ProLeft from "../../components/products/proLeft/ProLeft"
import ProRight from "../../components/products/proRight/ProRight"
import SelectProduct from "../../components/products/selectProduct/SelectProduct"


const Products = () => {
  const [active,setActive]=useState(true)
  return (
    <div className="items">
        <Navbar/>
        <div className="content flex">
            <ProLeft/>
            {
              active?<ProRight/>:<SelectProduct/>
            }
        </div>
    </div>
  )
}

export default Products