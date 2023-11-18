import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PurLeft from "../../components/purchase/purLeft/PurLeft";
import PurRight from "../../components/purchase/purRight/PurRight";
import { IconBox } from "@tabler/icons-react";

const Purchase = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="purchase">
      <Navbar />
      <div className="content flex">
        <PurLeft />
        {active ? (
          <PurRight />
        ) : (
          <div className="selectCustomer h-[100vh - 87px] flex flex-col justify-center items-center w-full bg-slate-100">
            <div>
              <IconBox className=" w-36 h-36 text-slate-400" />
              <p>No Transaction Selected</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
