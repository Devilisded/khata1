import "./supcardtran.scss";
import { IconUser,IconChecklist,IconSettings} from "@tabler/icons-react";
import suppliers from "../../../pages/supplier/supData";
import { useContext } from "react";
import { UserContext } from "../../../context/UserIdContext";
const SupCardTran = (props) => {
  const {supId}=useContext(UserContext)
  return (
    <div>
      <div>
      {suppliers
          .filter((persons) => persons.supId == supId)
          .map((filteredPersons) => (
        <div>
          <div
            className="flex justify-between space-x-6 items-center p-6"
           key={supId}>
            <div className="flex items-center gap-4">
              <div className="icon2">
                <IconUser className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl">{filteredPersons.name}</span>

                <span className="text-slate-500 text-xs">
                {filteredPersons.number}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6 buttons">
                <button>
                  <IconChecklist className="w-10" />
                  Report
                </button>
                <button onClick={props.edit}>
                  <IconSettings />
                </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default SupCardTran;
