import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SerLeft from "../../components/services/serLeft/SerLeft"
import SerRight from "../../components/services/serRight/SerRight"
import SelectService from "../../components/services/selectService/SelectService"


const Services = () => {
  const [active,setActive]=useState(false)

  return (
    <div className="services">
        <Navbar/>
        <div className="content flex">
            <SerLeft/>
            {
              active?<SerRight/>:<SelectService/>
            }
            
        </div>
    </div>
  )
}

export default Services