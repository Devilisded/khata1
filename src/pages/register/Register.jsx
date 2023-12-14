import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Register = () => {
  return (
    <motion.div className="bg-no-repeat bg-cover bg-left relative back">
      <div className="absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col text-white">
            <h1 className="mb-3 font-bold text-5xl">AccBook</h1>
            <p className="pr-3">
              Using a digital-first approach while keeping the needs of the
              merchants of Bharat at the centre of product design, has helped
              With this momentum, Accbook is poised to become a strong
              distribution platform for other services and products tailored to
              India's merchants.
            </p>
          </div>
        </div>
        <motion.div
          className="flex justify-center self-center z-10"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          exit={{ scale: 0.5, transition: { duration: 0.2 } }}
        >
          <div className="p-12 bg-white mx-auto rounded-2xl w-100">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up</h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Name
                </label>
                <motion.input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  placeholder="Enter your name"
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Phone Number
                </label>
                <motion.input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  placeholder="Enter your phone number"
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <motion.input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  placeholder="mail@gmail.com"
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <motion.input
                  className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  type=""
                  whileTap={{ scale: 0.97 }}
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <Link to="/login">
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-blue-400 hover:bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="text-center">
                Already have an Account?
                <Link to="/login">
                  <span className="text-blue-500">Sign In</span>
                </Link>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright © 2023-2024 Accbook</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;
