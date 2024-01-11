import { IconDevices2 } from "@tabler/icons-react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";

const AdminSacCard = () => {
  return (
    <div className="bg-white py-3 px-4 rounded-xl grid grid-cols-4 text-[16px] shadow-slate-400 shadow items-center">
      <div className="flex gap-4 items-center">
        <div className="h-10 w-10 shadow shadow-emerald-300 flex justify-center items-center text-emerald-600 rounded">
          <IconDevices2 />
        </div>
        <div className="mt-1 justify-self-center">
          <p>2110</p>
        </div>
      </div>
      <div className="mt-1 justify-self-center">Web Development</div>
      <div className="justify-self-center">18%</div>
      <div className="flex gap-4 justify-self-center">
        <button className="text-green-500 p-1 rounded-md shadow shadow-green-600 w-9 h-9 flex items-center justify-center  hover:bg-emerald-500 hover:text-white transition-all ease-in-out duration-500 ">
          <IconEdit />
        </button>
        <button className="text-red-500 p-1 rounded-md shadow shadow-red-600 w-9 h-9 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all ease-in-out duration-500">
          <IconTrash />
        </button>
      </div>
    </div>
  );
};

export default AdminSacCard;
