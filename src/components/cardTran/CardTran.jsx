import { IconSettings } from "@tabler/icons-react"
import "./cardtran.scss"

const CardTran = () => {
  return (
    <div>
    <div>
      <div class="flex justify-between space-x-6 items-center p-6">
        <div class="flex items-center space-x-4">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
            class="rounded-full h-14 w-14"
            alt=""
          />
          <div class="flex flex-col space-y-2">
            <span>John Doe</span>
            <span className="text-slate-500">+91 9466210083</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6 buttons">
            <button>Report</button>
            <button><IconSettings/></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardTran