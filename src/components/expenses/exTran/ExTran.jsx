import { IconCash } from "@tabler/icons-react";

const ExTran = () => {
  return (
    <div className="grid grid-cols-3 cursor-pointer p-4 border-b border-slate-100 cashtran">
      <div className="flex col-span-2 gap-3">
        <div className="notes rounded-full bg-emerald-100 p-3">
          <IconCash className="text-emerald-600" />
        </div>
        <div className="details flex flex-col gap-1 ">
          <div className="category font-semibold text-slate-600">
            Stationery
          </div>
          <div className="text-sm text-slate-500 font-semibold">
            Sep 10 2023
          </div>
        </div>
      </div>
      <div className="text-slate-600 justify-self-end font-semibold">₹ 800</div>
    </div>
  );
};

export default ExTran;
