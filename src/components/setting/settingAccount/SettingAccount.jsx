import { IconBriefcase, IconPlus } from "@tabler/icons-react";
import img from "../../../assets/Account.jpg";
import { motion } from "framer-motion";
const SettingAccount = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 p-5">
        <div className="p-5 bg-teal-300/20 rounded text-teal-600">
          <IconBriefcase />
        </div>
        <div className="text-xl">Account Settings</div>
      </div>
      <div className="bg-slate-100 mx-5 rounded-2xl p-5 h-[80vh] grid grid-cols-2 grid-rows-2 gap-5">
        <div className="border border-slate-300 rounded bg-white p-4 ">
          <div className="flex justify-center">
            <img src={img} alt="" className="w-32 h-32 rounded-full" />
          </div>
          <h2 className="text-center text-3xl font-semibold mt-3">
            Business Name
          </h2>
          <p className="text-center text-gray-600 mt-1 capitalize">
            Business type
          </p>
          <p className="text-center text-gray-600 mt-1">Address</p>
          <div className="mt-5">
            <div className="flex justify-between mt-5">
              <div className="font-semibold">
                GST :&nbsp;
                <span className=" font-thin">GST</span>
              </div>
              <div className="font-semibold">
                Business Nature :{" "}
                <span className="font-thin capitalize">Business Nature</span>
              </div>
            </div>
          </div>
          <div className="px-2 py-4 w-full">
            <motion.button
              className="w-full bg-blue-600/70 p-2 text-white"
              whileTap={{ scale: 0.99 }}
            >
              Use this account
            </motion.button>
          </div>
        </div>
        <div className="border border-slate-300 rounded bg-white p-4 ">
          <div className="flex justify-center">
            <img src={img} alt="" className="w-32 h-32 rounded-full" />
          </div>
          <h2 className="text-center text-3xl font-semibold mt-3">
            Business Name
          </h2>
          <p className="text-center text-gray-600 mt-1 capitalize">
            Business type
          </p>
          <p className="text-center text-gray-600 mt-1">Address</p>
          <div className="mt-5">
            <div className="flex justify-between mt-5">
              <div className="font-semibold">
                GST :&nbsp;
                <span className=" font-thin">GST</span>
              </div>
              <div className="font-semibold">
                Business Nature :{" "}
                <span className="font-thin capitalize">Business Nature</span>
              </div>
            </div>
          </div>
          <div className="px-2 py-4 w-full">
            <motion.button
              className="w-full bg-blue-600/70 p-2 text-white"
              whileTap={{ scale: 0.99 }}
            >
              Use this account
            </motion.button>
          </div>
        </div>
        <div className="border border-dashed border-black rounded  p-4 flex justify-center items-center">
          <motion.div
            className="p-5 bg-white rounded-full cursor-pointer text-black shadow "
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring" }}
          >
            <IconPlus className="w-12 h-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingAccount;
