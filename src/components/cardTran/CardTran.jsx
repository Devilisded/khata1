import { IconChecklist, IconSettings, IconUser } from "@tabler/icons-react"
import "./cardtran.scss"
import { useContext } from "react"
import { UserContext } from "../../context/UserIdContext"
import users from "../../pages/mainpage/dummyData"
const CardTran = (props) => {
  const {userId}=useContext(UserContext)
  return (
    <div>
    <div>
      <div className="flex justify-between space-x-6 items-center p-6">
        <div className="flex items-center gap-4">
        <div className="icon2">
            <IconUser className="text-blue-500"/>
          </div>
          <div className="flex flex-col">
            {
              users.filter(persons=>persons.userId==userId).map(filteredPersons=>(
                <span className="text-xl">{filteredPersons.name}</span>
              ))
            }
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