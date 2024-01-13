import {
  IconBoxSeam,
  IconLockAccess,
  IconLockAccessOff,
} from "@tabler/icons-react";

const HsnCard = () => {
  return (
    <div className="bg-white py-3 px-4 rounded-xl grid grid-cols-4 text-[16px] shadow-blue-600 shadow items-center">
      <div className="flex gap-4 items-center">
        <div className="h-10 w-10 shadow shadow-emerald-600 flex justify-center items-center text-emerald-600 rounded">
          <IconBoxSeam />
        </div>
        <div className="mt-1 justify-self-center">
          <p>302323</p>
        </div>
      </div>
      <div className="mt-1 justify-self-center">Property</div>
      <div className="mt-1 justify-self-center">18</div>
      <div className="flex gap-4 justify-self-center">
        <button className="text-red-500 p-1 rounded-md shadow shadow-red-600 w-9 h-9 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all ease-in-out duration-500">
          <IconLockAccess />
        </button>
        <button className="text-green-500 p-1 rounded-md shadow shadow-green-600 w-9 h-9 flex items-center justify-center  hover:bg-emerald-500 hover:text-white transition-all ease-in-out duration-500 ">
          <IconLockAccessOff />
        </button>
      </div>
    </div>
  );
};

export default HsnCard;
