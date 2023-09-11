import { IconArrowDownLeft, IconArrowUpRight, IconPlus } from "@tabler/icons-react";
import CardItem from "../cardItem/CardItem";
import "./mainleft.scss"
const MainLeft = () => {
  return (
      <div className="left bg-white shadow-lg w-full flex flex-col h-full">
        <div className="heading text-xl font-semibold">
          Customer <p className=" text-sky-600 num font-semibold">20</p>
        </div>
        <div className="giveget flex justify-between">
          <div className="give text-gray-500 flex gap-1 items-center">
            You'll Give : <span className="text-gray-700 font-bold">₹ 500</span>
            <IconArrowUpRight className="text-red-600" />
          </div>
          <div className="give text-gray-500 flex gap-1 items-center">
            You'll Get: <span className="text-gray-700 font-bold">₹ 300</span>
            <IconArrowDownLeft className="text-green-600" />
          </div>
          <button className="flex gap-1 ">
            <IconPlus className=" w-5" />
            Add Customer
          </button>
        </div>
        <div className="heading1">
          <div className="name">Name</div>
          <div className="amount">Amount</div>
        </div>
        <div className="cards">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
  );
};

export default MainLeft;
