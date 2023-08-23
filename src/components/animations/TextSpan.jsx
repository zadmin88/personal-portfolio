import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TextSpan = ({ children }) => {
  const animation = {
    y: [0, -10, 0], // Y values for animation
  };

  return (
    <motion.span
      className="inline-block"
      initial={{ y: 0 }} // Set the initial y value
      animate={animation} // Use the animation object directly
      whileHover={animation} // Apply animation on hover>
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
