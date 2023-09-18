import {
  IconAlertCircle,
  IconBrandWhatsapp,
  IconMessage2,
} from "@tabler/icons-react";
import SupCardTran from "../supCardTran/SupCardTran";
import SupTransaction from "../supTransaction/SupTransaction";
import "./supright.scss";

const SupRight = (props) => {
  return (
    <div className="supright">
      <div className="customer">
        <SupCardTran edit={props.edit} />
      </div>
      <div className="reminder flex p-3 items-center justify-between">
        <div className="left text-slate-700 flex items-center gap-3">
          Send Reminder <IconAlertCircle className="w-4 h-4" />
        </div>
        <div className="right flex gap-5">
          <button className="flex p-3 bg-white gap-2 items-center rounded-md text-slate-600 hover:bg-green-500 hover:text-white">
            <IconBrandWhatsapp className="text-green-600 onhover" />
            via Whatsapp
          </button>

          <button className="flex p-3 bg-white gap-2 items-center rounded-md text-slate-600  hover:bg-blue-500 hover:text-white">
            <IconMessage2 className="text-blue-600 onhover" />
            via SMS
          </button>
        </div>
      </div>
      <div className="heading text-slate-600">
        <div className="entry">Entries</div>
        <div className="flex gap-40 mr-24">
          <div className="gave">You'll Pay</div>
          <div className="get">You'll Receive</div>
        </div>
      </div>
      <div className="transactions">
        <SupTransaction />
        <SupTransaction />
        <SupTransaction />
      </div>
      <div className="btn shadow-lg">
        <button className="pay text-red-600" onClick={props.pay}>
          Pay ₹
        </button>
        <button className="receive text-green-600" onClick={props.receive}>
          Receive ₹
        </button>
      </div>
    </div>
  );
};

export default SupRight;
