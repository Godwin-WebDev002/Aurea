import { useState } from "react";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import { RxArrowTopRight } from "react-icons/rx";
import HeaderIMG from "../components/assets/image/HeaderIMG.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#EAF2E9] h-screen w-[100%] px-5 sm:px-10">
      <motion.nav
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className=" p-5 sm:px-10 py-1 fixed left-0 w-[100%] flex justify-between items-center backdrop-blur-md mt-2 z-20 "
      >
        <h1 className="text-3xl font-semibold text-[#4D5745] ">Aurea</h1>

        <ul className="lg:flex hidden w-[45%] justify-evenly items-center font-semibold">
          <li>
            <a href="#" className="hover:underline">
              Story
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Manufacturing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Team
            </a>
          </li>
        </ul>

        <button className="lg:flex hidden justify-center w-30 py-2 bg-[#4D5745] text-white font-semibold rounded cursor-pointer hover:bg-green-800">
          Order Now
        </button>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-1 rounded-lg hover:ring-2 hover:ring-black"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="lg:hidden fixed h-screen right-0 top-0 w-64 bg-[#4D5745] text-white bg-opacity-90 backdrop-blur-lg z-30 flex flex-col items-start p-8 space-y-6"
        >
          <button
            onClick={toggleMenu}
            className="self-end p-1 rounded-lg hover:ring-2 "
          >
            <BiX size={38} />
          </button>

          <ul className="flex flex-col space-y-6 text-xl">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Manufacturing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="w-full mt-8 px-5 py-3 bg-white text-black font-semibold rounded cursor-pointer hover:bg-green-800"
            onClick={toggleMenu}
          >
            Order
          </button>
        </motion.div>
      </motion.nav>

      <main className=" h-[100%] flex items-center justify-between text-[#293A1F] ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-135 space-y-3"
        >
          <h1 className="mb-[-1%]">FREE DELIVERY WORLDWIDE</h1>
          <h1 className="sm:text-7xl text-6xl font-bold ml-[-0.8%] ">
            Feed Your Skin, Find Your Glow.
          </h1>
          <h1 className="text-xl font-semibold">Natural Inner Beauty</h1>
          <p>
            Enhance Your Radiance with Clean, Science-Driven Skincare -
            Cruelty-Free, Sustainable and Enriched with Antioxidants for
            Healthy, Timeless Skin
          </p>

          <div className="border-b border-green-900" />

          <button className="flex justify-center items-center gap-1 w-40 py-3 bg-[#4D5745] text-white font-semibold rounded cursor-pointer hover:bg-green-800">
            Order Now <RxArrowTopRight size={20} />
          </button>
        </motion.div>

        <h1 className=" hidden sm:flex text-8xl font-bold text-[#293a1f88] rotate-270 absolute right-0 w-20 top-[60%]">
          Faceoil
        </h1>

        <motion.img
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          src={HeaderIMG}
          alt="HeaderIMG"
          className="hidden lg:flex"
        />
      </main>
    </header>
  );
};
