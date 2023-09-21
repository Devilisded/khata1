import SerCardTran from "../serCardTran/SerCardTran"
import SerTran from "../serTran/SerTran"
import "./serright.scss"

const SerRight = (props) => {
  return (
    <div className="serright">
      <div className="service">
        <SerCardTran edit={props.edit}/>
      </div>
      <div className="details grid grid-cols-4">
        <div className="grItems">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            ₹6128
            </div>
            <div className="text-xs text-slate-600">
              Sale Price
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            PCS
            </div>
            <div className="text-xs text-slate-600">
              Units
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            -
            </div>
            <div className="text-xs text-slate-600">
              SAC Code
            </div>
          </div>
        </div>
        <div className="grItems">
        <div className="flex flex-col items-center">
            <div className="font-semibold text-lg text-slate-800">
            -
            </div>
            <div className="text-xs text-slate-600">
              GST %
            </div>
          </div>
        </div>
      </div>
      <div className="heading text-slate-600 flex justify-between p-4 font-semibold mt-4">
        <div className="entry">Sales Entry</div>
        <div className="sales mr-60">Sales</div>
      </div>
      <div className="transactions">
        <SerTran editSale={props.editSale}/>
      </div>
      <div className="btn shadow-lg">
        <button onClick={props.record}>Record a Sale</button>
      </div>
    </div>
  )
}

export default SerRight