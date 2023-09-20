import ProCardTran from "../proCardTran/ProCardTran"
import ProTran from "../proTran/ProTran"
import "./proright.scss"

const ProRight = (props) => {
  return (
    <div className='proright'>
      <div className="product">
        <ProCardTran edit={props.edit}/>
      </div>
      <div className="details grid grid-cols-4 grid-rows-2">
        <div className="grItems">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            ₹38.18
            </div>
            <div className="text-xs text-slate-600">
              Sale Price
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            ₹33.2
            </div>
            <div className="text-xs text-slate-600">
              Purchase Price
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            125 NOS
            </div>
            <div className="text-xs text-slate-600">
              Stock Quantity
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            ₹4722.5
            </div>
            <div className="text-xs text-slate-600">
              Stock Value
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            NOS
            </div>
            <div className="text-xs text-slate-600">
              Units
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            0 NOS
            </div>
            <div className="text-xs text-slate-600">
              Low Stock
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            -
            </div>
            <div className="text-xs text-slate-600">
              HSN Code
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            GST @0.1%
            </div>
            <div className="text-xs text-slate-600">
              GST%
            </div>
          </div>
        </div>
      </div>
      <div className="heading text-slate-600 flex justify-between p-4 font-semibold">
        <div className="entry">Stock Entry</div>
        <div className="flex gap-40 mr-24">
          <div className="gave" >Stock Out</div>
          <div className="get" >Stock In</div>
        </div>
      </div>
      <div className="transactions">
        <ProTran/>
      </div>
      <div className="btn shadow-lg">
        <button className="pay text-red-600" onClick={props.out}>Stock Out</button>
        <button className="receive text-green-600 " onClick={props.in}>Stock In</button>
      </div>

    </div>
  )
}

export default ProRight