import { IconPointFilled } from "@tabler/icons-react"

const ProTran = () => {
  return (
    <div className='transaction cursor-pointer'>
    <div className="details flex flex-col gap-1 "><div className="date font-semibold flex items-center gap-1 text-slate-800">16 Sep 2023<IconPointFilled className="w-3 h-3"/>10:40 AM</div><div className="text-sm text-slate-600">Balance : -500</div></div>
    <div className="flex gap-56 mr-24">
    <div className="text-red-600">₹ 5000</div>
    <div className="text-green-600">-</div>
    </div>
</div>
  )
}

export default ProTran