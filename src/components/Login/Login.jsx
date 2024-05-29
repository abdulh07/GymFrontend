/* 
L'interface est épurée et intuitive, conformément aux spécifications. L'adresse e-mail et le mot de passe 
sont les seuls éléments demandés pour la connexion, offrant ainsi une expérience utilisateur sans complication."
*/
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import setTokenToLocalStroge from "../SetTokenToLocalStroge/SetTokenToLocalStroge";
import { AuthContex } from "../../Context/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const { count, setCount } = useContext(AuthContex);
  // all state
  const [error, setError] = useState("");

  // all fuctions
  const handleLogInSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    fetch(`http://localhost:5000/api/v1/user/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("user account login successfully");
          navigate("/");
          setTokenToLocalStroge(data?.data?.token);
          setCount(count + 1);
        } else {
          setError(data.error);
        }
      });
  };
  return (
    <div className="w-full h-screen bg-black login">
      <div className="background sm:w-[430px] sm:h-[520px] w-[320px] h-[350px]">
        <motion.div
          initial={{ opacity: 0, y: -50, x: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-top-[80px] sm:-left-[80px] -top-[50px] -left-[25px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="shape sm:size-[200px] size-[100px] sm:-bottom-[80px] sm:-right-[80px] -bottom-[50px] -right-[25px]"
        ></motion.div>
      </div>
      <form
        onSubmit={handleLogInSubmit}
        className="flex flex-col items-center justify-evenly text-white form sm:h-[520px] sm:w-[400px] w-[300px] h-[350px] sm:gap-0 gap-2"
      >
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">Login Here</h3>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer sm:text-base text-sm"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="password"
            className="cursor-pointer sm:text-base text-sm"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <h1 className="sm:text-sm text-xs flex items-center gap-1">
          Don&apos;t have an account{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-500 cursor-pointer hover:underline transition-all duration-300"
          >
            Signup Here!
          </Link>
        </h1>
        <h1 className="text-red-600 text-center">{error}</h1>
        <button className="w-full bg-white text-black sm:py-2 py-1 mt-2 font-medium rounded hover:bg-slate-200">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
