import { WiRaindrops } from "react-icons/wi";
import BenefitIMG from "../components/assets/image/BenefitIMG.png";
import { motion } from "framer-motion";

export const Benefit = () => {
  return (
    <div className="min-h-[100vh] p-10 bg-[#EAF2E9] ">
      <div className="flex flex-col items-center">
        <p> - Benefits - </p>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-semibold mt-2">
          Here at Aurea Healthy Skin Means a Healthier You
        </h1>
      </div>

      <div className="mt-15 flex justify-between items-center ">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={BenefitIMG}
          alt="BenefitIMG"
          className="size-[50%] rounded-md hidden lg:flex"
        />

        <div className="lg:w-[47%] w-[100%] ">
          {/* 0000000000000000000000000000000000000000000000000000000000 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center h-fit pb-7 w-[100%] border-b "
          >
            <div className="text-white w-fit h-fit bg-[#4D5745] rounded-md mr-5">
              <WiRaindrops size={55} />
            </div>
            <div>
              <h1 className="font-bold">Deep Hydration</h1>
              <p>
                Locks in moisture to keep skin supple, smooth, and comfortable
                throughout the day.
              </p>
            </div>
          </motion.div>

          {/* 0000000000000000000000000000000000000000000000000000000000 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center h-fit py-7 w-[100%] border-b "
          >
            <div className="text-white w-fit h-fit bg-[#4D5745] rounded-md mr-5">
              <WiRaindrops size={55} />
            </div>
            <div>
              <h1 className="font-bold">Radiance Boost</h1>
              <p>
                Enriched with natural antioxidants to revive dullness and
                enhance your skin's natural glow.
              </p>
            </div>
          </motion.div>

          {/* 0000000000000000000000000000000000000000000000000000000000 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center h-fit py-7 w-[100%] border-b "
          >
            <div className="text-white w-fit h-fit bg-[#4D5745] rounded-md mr-5">
              <WiRaindrops size={55} />
            </div>
            <div>
              <h1 className="font-bold">Skin Barrier Support</h1>
              <p>
                Strengthens and protects against envitonmental stressors for
                healthier, more resilient skin.
              </p>
            </div>
          </motion.div>

          {/* 0000000000000000000000000000000000000000000000000000000000 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center h-fit py-7 w-[100%] border-b "
          >
            <div className="text-white w-fit h-fit bg-[#4D5745] rounded-md mr-5">
              <WiRaindrops size={55} />
            </div>
            <div>
              <h1 className="font-bold">Powered by Natural Ingredients</h1>
              <p>
                Formulated with botanically derived oils and plant extracts to
                nourish, protect, and restore - free from synthetic filters or
                harsh chemicals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
