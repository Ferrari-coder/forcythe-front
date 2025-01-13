import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { fadeIn, textVariant } from "../../utilis/motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import { cardData } from "../../constants";

// Card Component: A reusable card component to display information
function Card({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
  gradientPosition?: "top-left" | "right" | "top-right";
}) {
  return (
    <motion.div
      variants={fadeIn("", "spring", id * 0.5, 0.75)}
      className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left bg-gradient-to-r from-[rgba(255,255,255,0.5)]  to-[rgb(23,39,59)]"
    >
      {/* Content Wrapper */}
      <div className="z-10 w-full rounded-2xl bg-transparent text-white">
        <div className="w-full rounded-2xl bg-[rgb(3,5,22)] p-10 transition-all duration-300">
          <div className="mb-5 w-[46px] rounded-md bg-[rgba(96,166,231,0.6)] p-2">
            <Layers className="h-[30px] w-[30px]" />
          </div>
          <h4 className="mb-5 text-2xl font-medium leading-8">{title}</h4>
          <div>
            <p className="m-0 text-[17.5px] text-[rgb(174,169,177)]">
              {description}
            </p>
          </div>
        </div>
      </div>
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 z-0 h-[281px] w-full flex-none overflow-hidden rounded-2xl blur-sm }`}
      ></div>
      {/* Black Overlay */}
      <div className="absolute inset-[2px] flex-none rounded-2xl bg-black"></div>
    </motion.div>
  );
}

// Cards Component: A container to render multiple Card components
function Cards() {
  return (
    <div className="w-full bg-[rgb(3,5,22)] bg-[linear-gradient(0deg,rgb(12,38,69)_20%,rgb(3,5,22)_70%)] px-7 lg:px-28 py-14 text-base leading-[27px] text-white">
      {/* Header Section */}
      <motion.div variants={textVariant(0.2)}>
        <p className="mb-10 text-[36px] leading-[40px] sm:text-[35px] sm:leading-[40px] lg:text-[42px] lg:leading-[56px] mx-auto text-[#b3d0f2]">
          Your best call for B2B/B2C product innovation
        </p>
      </motion.div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-7 md:gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Cards, "");
