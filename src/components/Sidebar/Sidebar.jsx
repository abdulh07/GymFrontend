import { motion } from "framer-motion";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const variants = {
  open: {
    clipPath: "circle(1500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-black text-white sm:hidden"
    >
      <motion.div
        variants={variants}
        className="fixed sm:w-[400px] w-[200px] h-screen top-0 left-0 bottom-0 bg-[#0b3f63] z-[100] sm:hidden"
      >
        <Links />
      </motion.div>

      {/* toggle button */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
