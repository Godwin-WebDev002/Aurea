import { BsStarFill } from "react-icons/bs";
import Smoke from "../components/assets/image/Smoke.png";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <div className=" min-h-[60vh] px-5 sm:px-10 flex flex-col items-center py-10 ">
      <h1> - Testimonials -</h1>
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-semibold ">
        See what our customers have to say
      </h1>

      <div className="w-[100%] flex flex-wrap gap-2 justify-evenly mt-8 ">
        {/* 00000000000000000000000000000000000000000000000000000000000000 */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="shadow h-55 w-80 bg-white p-5 rounded-lg space-y-3 "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Smoke} alt="" className="size-7 rounded-full" />
              <p className="text-xs">By Emily R.</p>
            </div>

            <div className="flex text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          </div>
          <h1 className="text-sm">
            "I've tried countless serums, but Aurea's Celestial Glow Serum is
            next-level. Within a week, my skin looked brighter and felt smooter
            - like I'd gotten a professional facial. The rosehip blended is
            devine, an a little goes a long way. Worth every penny!"
          </h1>
        </motion.div>

        {/* 00000000000000000000000000000000000000000000000000000000000000 */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="shadow h-55 w-80 bg-white p-5 rounded-lg space-y-3 "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Smoke} alt="" className="size-7 rounded-full" />
              <p className="text-xs">By Tom F.</p>
            </div>

            <div className="flex text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          </div>
          <h1 className="text-sm">
            "As someone with eczema, I'm cautious with new products, Aurea's
            Soothing Relief Cream calmed my redness overnight. No fragrance, no
            sting - just hydration that lasts all day. My holy grail now!"
          </h1>
        </motion.div>

        {/* 00000000000000000000000000000000000000000000000000000000000000 */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="shadow h-55 w-80 bg-white p-5 rounded-lg space-y-3 "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Smoke} alt="" className="size-7 rounded-full" />
              <p className="text-xs">By Dan E.</p>
            </div>

            <div className="flex text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          </div>
          <h1 className="text-sm">
            "From the gold packaging to the spa-like scent, using Aurea feels
            like self-care. Their Overnight Renewal Mask transformed my dry
            skin. Woke up plump and dewy. Obsessed!"
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
