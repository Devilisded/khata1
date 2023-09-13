import { IconChecklist, IconSettings, IconUser } from "@tabler/icons-react"
import "./cardtran.scss"

const CardTran = (props) => {
  return (
    <div>
    <div>
      <div className="flex justify-between space-x-6 items-center p-6">
        <div className="flex items-center gap-4">
        <div className="icon2">
            <IconUser className="text-blue-500"/>
          </div>
          <div className="flex flex-col">
            <span className="text-xl">John Doe</span>
            <span className="text-slate-500 text-xs">+91 9466210083</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6 buttons">
            <button><IconChecklist className="w-10"/>Report</button>
            <button onClick={props.edit}><IconSettings/></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardTran