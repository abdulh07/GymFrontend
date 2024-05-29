import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="sm:w-full w-screen h-screen flex sm:flex-row flex-col sm:items-end sm:justify-between items-start justify-end gap-5"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/8zPc0wzy/1710952513123.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
        viewport={{ once: true, amount: 0.5 }}
        className="sm:text-7xl text-4xl text-white anton text-start sm:pl-24 pl-10 sm:pb-16 text-pretty"
      >
        TRAIN ON YOUR OWN <br /> TIME.
      </motion.h1>
      <Link to='/coach' className="sm:pr-24 pb-16 pl-10">
        <motion.button initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
        viewport={{ once: true, amount: 0.5 }} className="sm:px-24 sm:py-7 px-5 py-2 rounded-full bg-transparent border uppercase text-white font-medium hover:bg-white hover:text-black transition-colors duration-300">
          Join our gym
        </motion.button>
      </Link>
    </div>
  );
};

export default Header;
