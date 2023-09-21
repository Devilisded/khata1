import { IconPointFilled } from "@tabler/icons-react"


const SerTran = (props) => {
  return (
    <div className='transaction cursor-pointer' onClick={props.editSale}>
    <div className="details flex flex-col gap-1 "><div className="date font-semibold flex items-center gap-1 text-slate-800">16 Sep 2023<IconPointFilled className="w-3 h-3"/>10:40 AM</div><div className="text-sm text-slate-600">Balance : -500</div></div>
    <div className="text-blue-600 mr-60">₹ 5000</div>
</div>
  )
}

export default SerTran