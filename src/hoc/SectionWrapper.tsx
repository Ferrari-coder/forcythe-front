import { motion } from "framer-motion";
import { staggerContainer } from "../utilis/motion";

const SectionWrapper = (Component:any, idName:any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25}}
        className="overflow-x-hidden"
      >
        <span className="hash-span" id={idName}>
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
