import { IconPlus, IconSearch } from "@tabler/icons-react";
import StaffObj from "../staffObj/StaffObj";

const StaffLeft = () => {
  return (
    <div className="bg-white shadow-lg w-full flex flex-col h-full">
      <div className="text-xl font-semibold flex p-5 gap-2 text-[#008cffb4] items-center border-b border-slate-300">
        Staff
        <p className="font-semibold text-sm px-5 bg-blue-300/20 py-1 rounded-full text-sky-600">
          5
        </p>
      </div>
      <div className="p-5 border-b border-slate-300 grid grid-cols-12">
        <div className="flex h-10 rounded p-1 w-full items-center gap-2 border border-slate-400 hover:border-black col-span-6">
          <IconSearch className="text-slate-500" />
          <input
            type="text"
            className="focus:outline-none p-1 w-full"
            placeholder="Search for staff..."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className="col-span-4"></div>
        <button
          className="flex gap-1 col-span-2 items-center justify-center rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white"
          style={{
            border: "1px solid #109e5b",
            transition: "all 400ms ease-in-out",
          }}
        >
          <IconPlus className="w-5" />
          Add Staff
        </button>
      </div>
      <div>
        <div className="text-xl px-4 py-2 text-black">
          <div>Staff Information</div>
        </div>
        <div className="flex flex-col gap-1 h-[calc(100vh-280px)] overflow-y-scroll">
          <StaffObj />
          <StaffObj />
        </div>
      </div>
    </div>
  );
};

export default StaffLeft;
