import { motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkmode = () => {
  const { toggleDarkMode, isDark } = useDarkMode((state) => state);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      whileTap={{ rotate: 180 }}
      onClick={() => {
        toggleDarkMode(isDark);
      }}
      className={`focus:outline-none `}
    >
      <circle
        cx="8"
        cy="8"
        r="7.75"
        fill="#E7E5E4"
        stroke="#18181B"
        strokeWidth="0.5"
      />
      <circle
        cx="24"
        cy="8"
        r="7.75"
        stroke="#E8E8E8"
        fill="#18181B"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
};

export default ToggleDarkmode;
