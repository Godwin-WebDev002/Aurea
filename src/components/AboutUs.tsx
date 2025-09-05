import { RxArrowTopRight } from "react-icons/rx";
import AboutIMG from "../components/assets/image/AboutIMG.jpg";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <div className="bg-[#EAF2E9] py-15 px-5 sm:px-10 flex md:flex-row flex-col items-center justify-between">
      <div className="md:w-[48%] w-[100%] flex flex-col space-y-5">
        <h1> - About Us -</h1>
        <h1 className="lg:text-5xl text-4xl   font-semibold">
          The Heart of Aurea
        </h1>
        <p>
          At Aurea, we believe that radiant skin starts with the purest
          ingredients and the gentlest care. Our mission is simple: to craft
          skincare that's as nourishing for your skin as it is kind to the
          planet. Inspired by nature and guided by science, every Aurea product
          blends potent botanical extracts with proven active ingredients to
          deliever visible results without compromise.
        </p>
        <div className="border-b " />

        <button className="flex justify-center items-center gap-1 w-40 py-3 bg-[#4D5745] text-white font-semibold rounded cursor-pointer hover:bg-green-800">
          Order Now <RxArrowTopRight size={20} />
        </button>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        src={AboutIMG}
        alt="AboutIMG"
        className="md:w-[50%] w-[70%] h-[60%] rounded-lg mt-10 md:mt-0 "
      />
    </div>
  );
};
