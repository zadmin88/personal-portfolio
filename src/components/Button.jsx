/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const Button = ({ label, color, action }) => (
  <motion.button
    onClick={action}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`rounded-full  
    
      ${
        color === "black"
          ? "border-solid border-2 border-zinc-900 text-zinc-900 dark:border-stone-200 dark:text-stone-200 "
          : ""
      }
      ${
        color === "green"
          ? "text-zinc-900 dark:bg-lime-300 bg-lime-500  border-0"
          : ""
      }
       font-semibold         
       py-2 
       px-12`}
  >
    {label}
  </motion.button>
);

// className="rounded-full   text-zinc-900 dark:bg-lime-300 bg-lime-500 font-semibold  py-2 px-12 hover:bg-lime-400 dark:hover:bg-lime-100">
