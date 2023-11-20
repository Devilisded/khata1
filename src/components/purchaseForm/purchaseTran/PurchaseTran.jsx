import { IconTrash } from "@tabler/icons-react";
import React from "react";

const PurchaseTran = () => {
  return (
    <div className="grid grid-cols-9 text-center border-b border-slate-300 hover:shadow hover:bg-slate-100">
      <div className="border-r border-slate-300 p-4">1</div>
      <div className="border-r border-slate-300 p-4">-</div>

      <div className="border-r border-slate-300 p-4">-</div>
      <div className="border-r border-slate-300 p-4">5 | NOS</div>
      <div className="border-r border-slate-300 p-4">₹2520 | ₹ 200</div>

      <div className="border-r border-slate-300 p-4">10%</div>
      <div className="border-r border-slate-300 p-4">₹ 250</div>

      <div className="border-r border-slate-300 p-4">₹ 200</div>
      <div className="grid place-items-center">
        <div className="border border-red-600 p-2 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer rounded-lg transition-all ease-in-out w-10">
          <IconTrash />
        </div>
      </div>
    </div>
  );
};

export default PurchaseTran;
