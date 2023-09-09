import CardItem from "../../components/cardItem/CardItem"
import CardTran from "../../components/cardTran/CardTran"
import Navbar from "../../components/navbar/Navbar"
import Transaction from "../../components/transaction/Transaction"
import "./mainpage.scss"
import {IconArrowDownLeft,IconArrowUpRight, IconPlus} from "@tabler/icons-react"
const MainPage = () => {
  return (
    <div className="mainpage">
        <Navbar/>
        <div className="content flex">
            <div className="left bg-white shadow-lg w-full flex flex-col h-full">
              <div className="heading text-2xl">Customer <p className="text-white num">2</p></div>
              <div className="giveget flex justify-around">
                <div className="give text-gray-500 flex gap-1 items-center">You'll Give : <span className="text-gray-700 font-bold">₹ 500</span><IconArrowUpRight className="text-red-600"/></div>
                <div className="give text-gray-500 flex gap-1 items-center">You'll Get: <span className="text-gray-700 font-bold">₹ 300</span><IconArrowDownLeft className="text-green-600"/></div>
                <button className="flex gap-1"><IconPlus/>Add Customer</button>
              </div>
              <div className="heading1">
                <div className="name">Name</div>
                <div className="amount">Amount</div>
              </div>
              <div className="cards">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
              </div>
            </div>
            <div className="right bg-white shadow-xl w-full">
              <div className="customer">
                <CardTran/>
              </div>
              <div className="heading text-slate-600">
                <div className="entry">Entries</div>
                <div className="flex gap-40 mr-40">
                <div className="gave">You Gave</div>
                <div className="get">You Got</div>
                </div>
              </div>
              <div className="transactions">
              <Transaction/>
              <Transaction/>
              <Transaction/>
              <Transaction/>
              <Transaction/>
              <Transaction/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage