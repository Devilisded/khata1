import HsnCard from "../hsnCard/HsnCard";

const HsnCode = () => {
  return (
    <div className="w-full px-4">
      <div className="p-5 flex gap-4 items-center">
        <div className="text-2xl font-semibold text-sky-600/80">HSN Codes</div>
        <div className="bg-sky-600/10 text-sky-600 px-5 py-1 rounded-full">
          6
        </div>
      </div>
      <div className="bg-slate-100 h-[90vh] rounded-xl p-4 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <div>Search HSN Code</div>
            <input
              type="text"
              className="border border-solid border-slate-300 p-2 rounded focus:oultine-sky-600 w-96"
              placeholder="Search..."
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <div>Filter</div>
            <select className=" h-[39px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=""></option>
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div>Sort</div>
            <select className="h-[39px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=""></option>
              <option value="recent">Option 1</option>
              <option value="oldest">Option 2</option>
            </select>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl grid grid-cols-4 text-xl  font-semibold">
          <div className="pl-4">Code </div>
          <div className="justify-self-center">Description </div>
          <div className="justify-self-center">GST </div>
          <div className="justify-self-center">Actions</div>
        </div>
        <div className="flex flex-col gap-3 overflow-contain overflow-y-scroll p-1">
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
          <HsnCard />
        </div>
      </div>
    </div>
  );
};

export default HsnCode;

// 48 from left
