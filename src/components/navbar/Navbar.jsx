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
            <div className="text-[50px] text-[#008cff]">AccBook</div>
        </div>
        <div className="center flex ">
                <div className="items flex gap-4">
                    {
                        items.map((item,index)=>(
                            <div className="item flex flex-col items-center cursor-pointer" key={index}>
                            <div className={item.class?item.class:"icon"}>{item.icon}</div>
                            <div className="name">{item.name}</div>
                            </div>
                        ))
                    }
            
        </div>
      </div>
      <div className="right">
        <div className="profile">
            <img src="https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&w=1000&q=80" className="shadow-2xl cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar