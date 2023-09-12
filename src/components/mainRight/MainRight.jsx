import CardTran from "../cardTran/CardTran";
import Transaction from "../transaction/Transaction";
import "./mainright.scss"

const MainRight = (props) => {
  return (
    <div className="right bg-white shadow-xl w-full">
      <div className="customer">
        <CardTran />
      </div>
      <div className="heading text-slate-600">
        <div className="entry">Entries</div>
        <div className="flex gap-40 mr-24">
          <div className="gave">You'll Pay</div>
          <div className="get">You'll Receive</div>
        </div>
      </div>
      <div className="transactions">
        {
          props.transactions.map((item,index)=>(
            <Transaction key={index} transactions={item}/>
          ))
        }
      </div>
      <div className="btn shadow-lg">
        <button className="pay text-red-600">Pay ₹</button>
        <button className="receive text-green-600 ">Receive ₹</button>
      </div>
    </div>
  );
};

export default MainRight;
