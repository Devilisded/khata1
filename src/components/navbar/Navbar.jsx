import { IconBuildingFactory2, IconServer, IconSettings, IconTruckLoading, IconUser } from "@tabler/icons-react"
import "./navbar.scss"
const Navbar = () => {
    const items=[
        {
            name:"Customer",
            icon:<IconUser/>,
            class:"active"
        },{
            name:"Supplier",
            icon:<IconTruckLoading/>
        },
        {
            name:"Inventory",
            icon:<IconBuildingFactory2/>
        },{
            name:"Items",
            icon:<IconServer/>
        },
        {
            name:"Settings",
            icon:<IconSettings/>
        }

    ]



  return (
    <div className="navbar flex items-center w-full justify-between shadow-md">
        <div className="left">
            <div className="text-[50px] text-[#008cff]">Acc<span className="font-bold">Book</span></div>
        </div>
        <div></div>
        <div className="center flex ">
                <div className="items flex gap-14">
                    {
                        items.map((item,index)=>(
                            <div className="item flex flex-col items-center gap-1 justify-center cursor-pointer" key={index}>
                            <div className={"icon1"}>{item.icon}</div>
                            <div className={"name text-xs"} >{item.name}</div>
                            </div>
                        ))
                    }
            
        </div>
      </div>
      <div className="right">
        <div className="profile">
            <div>AB</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar