import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const links = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Session",
    path: "session",
  },
  {
    name: "Login",
    path: "login",
  }
];
const Links = () => {
  return (
    <motion.div
      variants={variants}
      className="absolute w-full h-full flex flex-col items-center justify-center gap-3 text-white"
    >
      {links.map((data, i) => (
        <motion.button
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          className="sm:text-2xl text-lg font-medium"
        >
          <NavLink to={`./${data.path}`}>{data.name}</NavLink>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Links;
