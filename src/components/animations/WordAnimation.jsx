import { motion } from "framer-motion";
// import TextSpan from "./TextSpan";

// eslint-disable-next-line react/prop-types
const WordAnimation = ({ children }) => {
  const wordToSpan = (word) => word.split("");
  const animation = {
    y: [0, -15, 0, 15, 0], // Y values for animation
  };

  const waveVariant = {
    animation: animation, // Encapsulate the animation object in a variant
  };

  return (
    <motion.div
      className="inline-block"
      initial={{ y: 0 }} // Set the initial y value
      whileHover="animation" // Use the variant name in whileHover
      variants={waveVariant} // Provide the variant to the motion.div
    >
      {wordToSpan(children).map((letter, idx) => (
        <motion.span
          key={idx}
          initial={{ y: 0 }} // Set initial y value for each letter
          animate={animation}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: idx * 0.1, // Delay each letter's animation
          }}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordAnimation;
