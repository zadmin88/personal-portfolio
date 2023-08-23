/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useState } from "react";

const WavyText = ({ text, delay = 0, duration = 0.05, ...props }) => {
  const [replay, setReplay] = useState(true);
  const letters = Array.from(text);

  const onHover = () => {
    setReplay(!replay);
    setTimeout(() => setReplay(true), 200);
  };

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div onMouseEnter={() => onHover()}>
      <motion.h1
        style={{ display: "flex", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        {...props}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default WavyText;
