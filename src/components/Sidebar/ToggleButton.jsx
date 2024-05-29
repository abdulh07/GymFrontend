import { motion } from "framer-motion";
import { useState } from "react";
const ToggleButton = ({ setOpen }) => {
  const [disable, setDisable] = useState(false);
  const handleDisable = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 2000);
  };
  return (
    <button
      disabled={disable}
      className="size-[60px] bg-transparent fixed flex items-center justify-center rounded-full border-none top-[20px] left-[20px] cursor-pointer z-[100] sm:hidden"
      onClick={handleDisable}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-full flex items-center justify-center"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
              closed: { d: "M 2 2.5 L 20 2.5", opacity: 1 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
              closed: { d: "M 2 16.346 L 20 16.346", opacity: 1 },
            }}
          />
        </svg>
      </div>
    </button>
  );
};

export default ToggleButton;
