import "./transaction.scss"

const Transaction = () => {
  return (
    <div className='transaction'>
        <div className="details flex flex-col gap-2 "><div className="date">10 Sep 2023</div><div className="text-sm text-slate-600">Balance : -500</div></div>
        <div className="flex gap-56 mr-40">
        <div className="text-red-600">-</div>
        <div className="text-green-600">₹ 500</div>
        </div>
    </div>
  )
}

export default Transaction