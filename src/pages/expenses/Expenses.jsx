import "./expenses.scss";
import Navbar from "../../components/navbar/Navbar";
import ExLeft from "../../components/expenses/exLeft/ExLeft";
import ExRight from "../../components/expenses/exRight/ExRight";
const Expenses = () => {
  return (
    <div className="expenses">
      <Navbar />
      <div className="content flex">
        <ExLeft />
        <ExRight />
      </div>
    </div>
  );
};

export default Expenses;
