import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TextSpan = ({ children }) => {
  return (
    <motion.span className="inline-block" whileHover={{ scale: 1.5 }}>
      {children}
    </motion.span>
  );
};

export default TextSpan;
