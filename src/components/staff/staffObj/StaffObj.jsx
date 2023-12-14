import { IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
const StaffObj = () => {
  return (
    <motion.div
      className="px-3 py-1 flex justify-between items-center m-1 hover:shadow rounded-xl hover:bg-violet-100/50 hover:shadow-violet-300 bg-white h-[80px] cursor-pointer"
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring" }}
    >
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-violet-300/20 flex justify-center items-center rounded-full text-violet-600">
          <IconUser />
        </div>
        <div className="text-lg">Akshit</div>
      </div>
      <div>
        <div>Parties - Limited</div>
        <div>Inventory - Limited</div>
        <div>Bills - Limited</div>
      </div>
    </motion.div>
  );
};

export default StaffObj;
