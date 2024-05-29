import Magnetic from "./Magnetic";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex flex-col items-center justify-center gap-10 py-10">
        <div className="w-full flex items-center justify-center gap-10">
            <Magnetic/>
        </div>
        <div className="w-full flex items-center justify-center gap-5">
            <span>Home</span>
            <span>Coaches</span>
            <span>About</span>
            <span>Contact Us</span>
        </div>
        <div className="w-full text-center">
          <span>Copyright © 2024 Body Buddy. All rights reserved. </span>
        </div>
    </footer>
  );
};

export default Footer;
