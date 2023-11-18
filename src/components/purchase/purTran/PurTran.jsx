import { IconReportMoney } from "@tabler/icons-react";
import React from "react";

const PurTran = () => {
  return (
    <div>
      <div
        className={
          "grid grid-cols-3 cursor-pointer p-4 border-b border-slate-100 cashtran"
        }
      >
        <div className="flex col-span-2 gap-3">
          <div className="notes rounded-full bg-cyan-100 w-12 h-12 flex items-center justify-center">
            <IconReportMoney className="text-cyan-600" />
          </div>
          <div className="details flex flex-col gap-1 ">
            <div className="category font-semibold text-slate-700">
              Akshit
              <div className="text-xs p-[2px] border border-slate-200 rounded text-slate-600 mr-4">
                Invoice # 1
              </div>
            </div>
            <div className="text-sm text-slate-500 font-semibold">
              10 Sep 2023
            </div>
          </div>
        </div>
        <div className="text-slate-600 justify-self-end font-semibold">
          ₹ 5000
        </div>
      </div>
    </div>
  );
};

export default PurTran;
