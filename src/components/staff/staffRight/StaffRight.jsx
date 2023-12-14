import { IconEdit, IconUser } from "@tabler/icons-react";

const StaffRight = () => {
  return (
    <div className="w-full">
      <div className="p-3 flex items-center justify-between border-b border-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-violet-300/20 flex justify-center items-center rounded-full text-violet-600">
            <IconUser />
          </div>
          <div>
            <div className="text-lg">Akshit</div>
            <div className="text-xs">9466210083</div>
          </div>
        </div>
        <button className="flex gap-1 border-solid border p-2 rounded border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition duration-300">
          <IconEdit />
          Edit Details
        </button>
      </div>
      <div className="px-4 py-6 text-black flex flex-col gap-4">
        <div className="px-4 shadow py-2 bg-green-100/20 rounded flex justify-between items-center">
          <div>
            <div className="text-lg">Bills</div>
            <div>
              View & Add for All Bills (Sales/Purchase/Returns) & Cashbook
            </div>
          </div>
          <img src="../src/assets/Bill.png" alt="" className="w-24" />
        </div>
        <div className="px-4 shadow py-2 bg-yellow-100/20 rounded flex justify-between items-center">
          <div>
            <div className="text-lg">Inventory</div>
            <div>Add Items & Stock In/Out</div>
          </div>
          <img src="../src/assets/inventory.png" alt="" className="w-24" />
        </div>
        <div className="px-4 shadow py-2 bg-blue-100/20 rounded flex justify-between items-center">
          <div>
            <div className="text-lg">Parties</div>
            <div>View Entries & Send Reminders</div>
          </div>
          <img src="../src/assets/Parties.png" alt="" className="w-24" />
        </div>
      </div>
    </div>
  );
};

export default StaffRight;
