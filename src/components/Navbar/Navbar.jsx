import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContex } from "../../Context/UserContext";
const Navbar = () => {
  const { user } = useContext(AuthContex);
  return (
    <>
      <nav className="w-full sm:flex items-center justify-center fixed top-0 left-0 pt-5 z-[999] hidden">
        <div className="glassEffect max-w-[1440px] w-full mx-auto flex items-center justify-between z-[10] px-10 rounded-full text-blue-800 font-medium">
          <Link to="/" className="text-lg">
            <img
              src="https://i.postimg.cc/zvSRVMKG/logo-1.png"
              alt=""
              className="w-20"
            />
          </Link>
          <div className="flex items-center gap-5 text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/session">Session</NavLink>
            <NavLink to="/food">Food</NavLink>
            {user?.role === "user" ? (
              <>
                <NavLink to="/coach">Become a Coach</NavLink>
              </>
            ) : (
              <></>
            )}
            {user?.role ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <Sidebar />
      <img
        src="https://i.postimg.cc/zvSRVMKG/logo-1.png"
        alt=""
        className="w-20 fixed top-[25px] right-[25px] sm:hidden block z-[999]"
      />
    </>
  );
};

export default Navbar;
