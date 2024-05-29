import FramerMagnetic from "./FramerMagnetic";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Magnetic = () => {
  return (
    <>
      <FramerMagnetic>
        <FaFacebookF
          size={30}
          className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
        />
      </FramerMagnetic>
      <FramerMagnetic>
        <FaTwitter
          size={30}
          className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
        />
      </FramerMagnetic>
      <FramerMagnetic>
        <FaLinkedinIn
          size={30}
          className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
        />
      </FramerMagnetic>
      <FramerMagnetic>
        <FaInstagram
          size={30}
          className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
        />
      </FramerMagnetic>
    </>
  );
};

export default Magnetic;