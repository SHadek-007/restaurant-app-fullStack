import React from "react";
import logo from "../../assets/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import userProfile from "../../assets/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-5 md:px-16">
      {/* tablet & desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10 object-cover" src={logo} alt="Logo" />
          <p className="font-bold text-xl">City</p>
        </Link>
        <div className="flex items-center justify-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer hover:text-slate-500 duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="cursor-pointer hover:text-slate-500 duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="cursor-pointer hover:text-slate-500 duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="cursor-pointer hover:text-slate-500 duration-100 transition-all ease-in-out">
              Services
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-2xl cursor-pointer" />
            <div className="absolute -top-4 -right-3 w-6 h-6 rounded-full bg-red-400 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">0</p>
            </div>
          </div>
          <motion.img
            whileTap={{scale: 0.6}}
            className="w-10 min-w-[40px] h-10 min-h-[40px] hover:drop-shadow-lg cursor-pointer"
            src={userProfile}
            alt="User ProfilePicture"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
