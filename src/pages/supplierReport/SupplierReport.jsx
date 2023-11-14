import {
  IconCoins,
  IconFileSpreadsheet,
  IconFileTypePdf,
  IconPigMoney,
  IconScale,
  IconUsers,
} from "@tabler/icons-react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/report/sideBar/SideBar";
import CustTran from "../../components/report/custTran/CustTran";
import { useEffect, useState } from "react";

const SupplierReport = () => {
  const today = new Date();
  const [sdate, setSdate] = useState(today.toISOString().slice(0, 10));
  const [edate, setEdate] = useState(today.toISOString().slice(0, 10));
  const [flag, setFlag] = useState(true);
  const [period, setPeriod] = useState("");
  useEffect(() => {
    if (period === "date") {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [period]);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 p-4">
              <div className="bg-blue-200/50 text-blue-500 p-4 rounded">
                <IconUsers />
              </div>
              <span className="text-xl">Supplier Report</span>
            </div>
            <div className="flex gap-2 p-6">
              <button className="flex items-center gap-2 p-2 rounded bg-slate-100 hover:bg-rose-400 hover:text-white">
                <IconFileTypePdf />
                Download PDF
              </button>
              <button className="flex items-center gap-2 p-2 rounded bg-slate-100 hover:bg-emerald-600 hover:text-white">
                <IconFileSpreadsheet />
                Download Excel
              </button>
            </div>
          </div>
          <div className="content mx-4 rounded-2xl bg-slate-100 h-[81vh] p-4 flex flex-col gap-4">
            <div className="card bg-white p-4 rounded-lg flex gap-6">
              <div className="search">
                <div>Supplier Name</div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-pri block w-full p-2"
                  placeholder="Search...."
                />
              </div>
              <div className="period">
                <div>Period</div>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="date">Custom Date</option>
                </select>
              </div>
              <div className="start">
                <div>Start</div>
                <input
                  type="date"
                  className="border p-2 border-slate-300 rounded-lg"
                  value={sdate}
                  onChange={(e) => setSdate(e.target.value)}
                  disabled={flag}
                />
              </div>
              <div className="end">
                <div>End</div>
                <input
                  type="date"
                  className="border p-2 border-slate-300 rounded-lg"
                  value={edate}
                  onChange={(e) => setEdate(e.target.value)}
                  disabled={flag}
                />
              </div>
            </div>
            <div className="card bg-white p-4 rounded-lg flex flex-col gap-6">
              <p>0 Entries</p>
              <div className="flex gap-10">
                <div className="stat flex rounded-lg bg-red-300/50 w-60 h-24 p-5 items-center justify-between text-slate-700">
                  <div>
                    <div className="text-2xl font-semibold">₹ 500</div>
                    <div className="text-red-800 font-semibold">You Gave</div>
                  </div>
                  <div>
                    <IconCoins className="w-10 h-10" />
                  </div>
                </div>
                <div className="stat flex rounded-lg bg-green-300/30 w-60 h-24 p-5 items-center justify-between text-slate-700">
                  <div>
                    <div className="text-2xl font-semibold">₹ 450</div>
                    <div className="text-green-800 font-semibold">You Got</div>
                  </div>
                  <div>
                    <IconPigMoney className="w-10 h-10" />
                  </div>
                </div>
                <div className="stat flex rounded-lg bg-yellow-300/30 w-60 h-24 p-5 items-center justify-between text-slate-700">
                  <div>
                    <div className="text-2xl font-semibold">₹ 50</div>
                    <div className="text-yellow-800 font-semibold">
                      NET BALANCE
                    </div>
                  </div>
                  <div>
                    <IconScale className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-white rounded-lg">
              <div className="grid grid-cols-5 place-items-center border-b border-slate-300 bg-slate-50 py-3">
                <div>Date</div>
                <div>Supplier Name</div>
                <div>Details</div>
                <div>You Gave</div>
                <div>You Give</div>
              </div>
              <div className="h-[40vh] overflow-y-scroll">
                <CustTran />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierReport;
