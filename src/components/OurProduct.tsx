import { GiWaterDrop } from "react-icons/gi";
import { motion } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { FaBottleWater, FaFlask } from "react-icons/fa6";
import { FaTint } from "react-icons/fa";

export const OurProduct = () => {
  return (
    <div className="min-h-[40vh] px-10 sm:px-20 pt-10 flex flex-col items-center space-y-8 py-5">
      <h1 className=" md:text-5xl sm:text-4xl text-3xl text-center leading-8 font-semibold ">
        Check Out Our Products
      </h1>

      <div className="w-[100%] flex flex-wrap gap-2 justify-evenly">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full p-7.5 bg-green-100 w-fit">
            <FaTint size={30} />
          </div>
          <h1 className="font-semibold">Cream</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full p-7.5 bg-green-100 w-fit">
            <FaFlask size={30} />
          </div>
          <h1 className="font-semibold">Serum</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full p-7.5 bg-green-100 w-fit">
            <FaBottleWater size={30} />
          </div>
          <h1 className="font-semibold">Lotion</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full p-7.5 bg-green-100 w-fit">
            <BiSun size={30} />
          </div>
          <h1 className="font-semibold">Sunscreen</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full p-7.5 bg-green-100 w-fit">
            <GiWaterDrop size={30} />
          </div>
          <h1 className="font-semibold">Coconut Oil</h1>
        </motion.div>
      </div>

      <button className="flex justify-center py-2 px-5 bg-[#4D5745] text-white font-semibold rounded cursor-pointer hover:bg-green-900">
        View Collections
      </button>
    </div>
  );
};
