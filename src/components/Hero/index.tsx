import { Play } from "lucide-react";
import { ImageScroller } from "./components/ImageScroller/index";
import { motion } from "framer-motion";
import { textVariant } from "../../utilis/motion";
import { SectionWrapper } from "../../hoc";

function Hero() {
  return (
    <main className="w-full mt-[6rem] lg:mt-[6.5rem]">
      <div
        className=" w-full min-h-screen bg-[#030516] text-white text-base leading-[27px] bg-top"
        style={{
          backgroundImage:
            'url("https://forcythe.com/images/header-background.svg")',
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-7 md:px-28">
          <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
            <div className="max-w-[896px]">
              <div className="min-h-[180px]">
                <motion.div variants={textVariant(0.3)}>
                  <h1 className="sm:text-[80px] text-[56px] leading-[60px] font-normal sm:leading-[80px] mb-7">
                    We build <span className="text-[#60A6E7]">products</span>{" "}
                    that shape a better future
                  </h1>
                </motion.div>
              </div>
              <div className="mb-8 max-w-[768px]">
                <motion.div variants={textVariant(0.3)}>
                  <p className=" text-base md:text-lg leading-7 text-[#AEA9B1]">
                    We're the architects of digital excellence across
                    industries. We redefine business with cutting-edge digital
                    strategies that invokes sector-wide transformation.
                  </p>
                </motion.div>
              </div>
              <div className="mb-5">
                <motion.div variants={textVariant(0.3)}>
                  <div className="relative w-[150px]">
                    <button className="relative z-10 flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-full px-5 py-3 transition-all duration-300 hover:bg-[#064386] hover:text-white">
                      Book a Call
                      <Play className="w-3 h-3" />
                    </button>
                    <div className="absolute right-1.5 top-1.5 z-0 h-12 w-[150px] border border-dashed border-gray-200 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Section below the hero content */}
        <div className="py-10">
          <div className="min-h-[60px]">
            <motion.div variants={textVariant(0.3)}>
              <p className="max-w-[90%] text-center text-[32px] leading-[40px] sm:text-[35px] sm:leading-[40px] lg:text-[2.6rem] lg:leading-[48px] mx-auto mb-12">
                Success in{" "}
                <span className="capitalize text-[#60A6E7]">Motion </span>–{" "}
                <span className="capitalize">Our </span>clients' journey
              </p>
            </motion.div>
          </div>
          {/* Image scroller component */}
          <ImageScroller />
        </div>
      </div>
    </main>
  );
}

export default SectionWrapper(Hero, "");
