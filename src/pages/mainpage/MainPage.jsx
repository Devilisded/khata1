import MainLeft from "../../components/mainLeft/MainLeft"
import MainRight from "../../components/mainRight/MainRight"
import Navbar from "../../components/navbar/Navbar"
import "./mainpage.scss"
const MainPage = () => {
  const users=[
    {
      name:"Akshit",
      type:"Get",
      amount:300,
    },{
      name:"Harsh",
      type:"Give",
      amount:400
    },{
      name:"Sunil"
    }
  ]
  const transactions = [
    {
      date:"10 Sep 2023",
      pay:600
    },
    {
      date:"11 Sep 2023",
      receive:1000
    },{
      date:"12 Sep 2023",
      pay:"400"
    }
  ]
  return (
    <div className="mainpage">
        <Navbar/>
        <div className="content flex">
          <MainLeft users={users}/>
          <MainRight transactions={transactions}/>
        </div>
    </div>
  )
}

export default MainPage