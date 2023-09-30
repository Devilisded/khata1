import { IconPointFilled } from "@tabler/icons-react";

const SerTran = (props) => {
  const time1 = new Date(props.data.ser_time);
  const hours = time1.getHours();
  const minutes = time1.getMinutes();
  const fminutes = minutes < 10 ? "0" + minutes : minutes;
  const fhours = hours > 12 ? hours - 12 : hours;
  const AMPM = hours > 12 ? "PM" : "AM";
  return (
    <div className="transaction cursor-pointer" onClick={props.editSale}>
      <div className="details flex flex-col gap-1 ">
        <div className="date font-semibold flex items-center gap-1 text-slate-800">
          {props.data.ser_date}
          <IconPointFilled className="w-3 h-3" />
          {fhours + ":" + fminutes + " " + AMPM}
        </div>
        <div className="text-sm text-slate-600">Balance : -500</div>
      </div>
      <div className="text-blue-600 mr-60">
        ₹ {props.data.ser_tran_price * props.data.ser_quantity}
      </div>
    </div>
  );
};

export default SerTran;
