import CashLeft from "../../components/cashbook/cashLeft/CashLeft";
import CashRight from "../../components/cashbook/cashRight/CashRight";
import Navbar from "../../components/navbar/Navbar";

const Cashbook = () => {
  return (
    <div className="cashbook">
      <Navbar />
      <div className="content flex">
        <CashLeft />
        <CashRight />
      </div>
    </div>
  );
};

export default Cashbook;
