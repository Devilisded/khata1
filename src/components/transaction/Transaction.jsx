import "./transaction.scss"

const Transaction = (props) => {
  return (
    <div className='transaction cursor-pointer' onClick={props.transactions.pay?props.pay:props.transactions.receive?props.receive:alert("No Transactions")}>
        <div className="details flex flex-col gap-1 "><div className="date">{props.transactions.date}</div><div className="text-sm text-slate-600">Balance : -500</div></div>
        <div className="flex gap-56 mr-36">
        <div className="text-red-600">{props.transactions.pay?'₹ '+ props.transactions.pay : '-'}</div>
        <div className="text-green-600">{props.transactions.receive?'₹ '+ props.transactions.receive : '-'}</div>
        </div>
    </div>
  )
}

export default Transaction