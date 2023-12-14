import { Link } from "react-router-dom";
import "./login.scss";
import { motion } from "framer-motion";
const Login = () => {
  return (
    <motion.div className="bg-no-repeat bg-cover bg-center relative front">
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
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          exit={{ scale: 0, transition: { duration: 0.2 } }}
        >
          <div className="p-12 bg-white mx-auto rounded-2xl w-100">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <div className="space-y-5">
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
                  placeholder="Enter your password"
                  whileTap={{ scale: 0.97 }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    for="remember_me"
                    className="ml-2 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Link to="/">
                  <motion.button className="w-full flex justify-center bg-blue-400 hover:bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </motion.button>
                </Link>
              </div>
              <div className="text-center">
                Don't have an Account Yet?&nbsp;
                <Link to="/register">
                  <span className="text-blue-500">Sign Up</span>
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

export default Login;
