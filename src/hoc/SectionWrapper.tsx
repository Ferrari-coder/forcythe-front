import { motion } from "framer-motion";
// import { styles } from "../style";
import { staggerContainer } from "../utilis/motion";

const SectionWrapper = (Component:any, idName:any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25}}
      >
        {/* <span className="hash-span" id={idName}>
            &nbsp;
        </span> */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
