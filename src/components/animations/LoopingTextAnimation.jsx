/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const LoopingTextAnimation = ({ text, speed }) => {
  const containerStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };

  const textVariants = {
    animate: {
      x: ["0%", "-100%"], // Move the text to the left and then back to the right
      transition: {
        x: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div style={containerStyle}>
      <motion.span
        variants={textVariants}
        initial={{ x: "50%" }} // Start with the text moving to the left (x: -100%)
        animate="animate"
        style={{ display: "inline-block" }}
      >
        <p className="dark:text-lime-300 text-lime-600 text-xl md:text-2xl tracking-widest">
          {text}
        </p>
      </motion.span>
      <motion.span
        variants={textVariants}
        initial={{ x: "100%" }} // Start with the text moving to the left (x: -100%)
        animate="animate"
        style={{ display: "inline-block" }}
      >
        <p className="dark:text-lime-300 text-lime-600 text-xl md:text-2xl tracking-widest">
          {text}
        </p>
      </motion.span>
    </motion.div>
  );
};

export default LoopingTextAnimation;
