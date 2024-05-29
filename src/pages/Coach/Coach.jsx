/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContex } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { set } from "date-fns";

const Coach = () => {
  const { user } = useContext(AuthContex);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCoachApplicationSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const age = form.age.value;
    const hight = form.hight.value;
    const phone = form.phone.value;
    const gender = form.gender.value;

    // check box functions
    const workTime = [];

    const chackbox1 = form.chackbox1.checked;
    const chackbox1Value = form.chackbox1.value;

    const chackbox2 = form.chackbox2.checked;
    const chackbox2Value = form.chackbox2.value;

    const chackbox3 = form.chackbox3.checked;
    const chackbox3Value = form.chackbox3.value;

    const chackbox4 = form.chackbox4.checked;
    const chackbox4Value = form.chackbox4.value;

    const chackbox5 = form.chackbox5.checked;
    const chackbox5Value = form.chackbox5.value;

    const chackbox6 = form.chackbox6.checked;
    const chackbox6Value = form.chackbox6.value;

    const chackbox7 = form.chackbox7.checked;
    const chackbox7Value = form.chackbox7.value;

    const chackbox8 = form.chackbox8.checked;
    const chackbox8Value = form.chackbox8.value;

    const chackbox9 = form.chackbox9.checked;
    const chackbox9Value = form.chackbox9.value;

    const chackbox10 = form.chackbox10.checked;
    const chackbox10Value = form.chackbox10.value;

    const chackbox11 = form.chackbox11.checked;
    const chackbox11Value = form.chackbox11.value;

    const chackbox12 = form.chackbox12.checked;
    const chackbox12Value = form.chackbox12.value;

    const chackbox13 = form.chackbox13.checked;
    const chackbox13Value = form.chackbox13.value;

    const chackbox14 = form.chackbox14.checked;
    const chackbox14Value = form.chackbox14.value;

    const chackbox15 = form.chackbox15.checked;
    const chackbox15Value = form.chackbox15.value;

    const chackbox16 = form.chackbox16.checked;
    const chackbox16Value = form.chackbox16.value;

    const chackbox17 = form.chackbox17.checked;
    const chackbox17Value = form.chackbox17.value;

    const chackbox18 = form.chackbox18.checked;
    const chackbox18Value = form.chackbox18.value;

    const chackbox19 = form.chackbox19.checked;
    const chackbox19Value = form.chackbox19.value;

    const chackbox20 = form.chackbox20.checked;
    const chackbox20Value = form.chackbox20.value;

    const chackbox21 = form.chackbox21.checked;
    const chackbox21Value = form.chackbox21.value;

    const chackbox22 = form.chackbox22.checked;
    const chackbox22Value = form.chackbox22.value;

    const chackbox23 = form.chackbox23.checked;
    const chackbox23Value = form.chackbox23.value;

    const chackbox24 = form.chackbox24.checked;
    const chackbox24Value = form.chackbox24.value;

    // if functions
    if (chackbox1) {
      workTime.push(chackbox1Value);
    }
    if (chackbox2) {
      workTime.push(chackbox2Value);
    }
    if (chackbox3) {
      workTime.push(chackbox3Value);
    }
    if (chackbox4) {
      workTime.push(chackbox4Value);
    }
    if (chackbox5) {
      workTime.push(chackbox5Value);
    }
    if (chackbox6) {
      workTime.push(chackbox6Value);
    }
    if (chackbox7) {
      workTime.push(chackbox7Value);
    }
    if (chackbox8) {
      workTime.push(chackbox8Value);
    }
    if (chackbox9) {
      workTime.push(chackbox9Value);
    }
    if (chackbox10) {
      workTime.push(chackbox10Value);
    }
    if (chackbox11) {
      workTime.push(chackbox11Value);
    }
    if (chackbox12) {
      workTime.push(chackbox12Value);
    }
    if (chackbox13) {
      workTime.push(chackbox13Value);
    }
    if (chackbox14) {
      workTime.push(chackbox14Value);
    }
    if (chackbox15) {
      workTime.push(chackbox15Value);
    }
    if (chackbox16) {
      workTime.push(chackbox16Value);
    }
    if (chackbox17) {
      workTime.push(chackbox17Value);
    }
    if (chackbox18) {
      workTime.push(chackbox18Value);
    }
    if (chackbox19) {
      workTime.push(chackbox19Value);
    }
    if (chackbox20) {
      workTime.push(chackbox20Value);
    }
    if (chackbox21) {
      workTime.push(chackbox21Value);
    }
    if (chackbox22) {
      workTime.push(chackbox22Value);
    }
    if (chackbox23) {
      workTime.push(chackbox23Value);
    }
    if (chackbox24) {
      workTime.push(chackbox24Value);
    }

    const data = {
      firstName,
      lastName,
      email,
      age,
      hight,
      phone,
      gender,
      workTime,
      photo: user.photo,
      length: workTime.length,
    };
    if(workTime.length === 0){
      return toast.error('please selecet  work time')
    }
   

    fetch(`http://localhost:5000/api/v1/trainer/createApplication`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          toast.success("coach application submited successfully");
          navigate("/");
        }
      });
  };
  return (
    <div className="w-full h-[1000px]  bg-black login">
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
        onSubmit={handleCoachApplicationSubmit}
        className="flex flex-col items-center justify-evenly text-white form sm:h-auto sm:w-auto w-[300px] h-[350px] sm:gap-3 gap-2 mt-20"
      >
        <h3 className="sm:text-[2rem] text-[1.5rem] font-medium">
          Become a Coach
        </h3>

        <div className="w-full flex items-center gap-3">
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              FirstName
            </label>
            <input
              required
              type="text"
              disabled
              placeholder="first name"
              name="firstName"
              defaultValue={user.firstName}
              className="sm:py-2 sm:px-5 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              LastName
            </label>
            <input
              required
              type="text"
              disabled
              placeholder="last name"
              name="lastName"
              defaultValue={user.lastName}
              className="sm:py-2 sm:px-5 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="cursor-pointer sm:text-base text-sm">Email</label>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={user.email}
            disabled
            className="sm:py-2 py-1 disabled:cursor-not-allowed outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex items-center gap-3">
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">Age</label>
            <input
              required
              type="text"
              placeholder="age"
              name="age"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="cursor-pointer sm:text-base text-sm">
              Height
            </label>
            <input
              required
              type="text"
              placeholder="height in cm"
              name="hight"
              className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="cursor-pointer sm:text-base text-sm">Phone</label>
          <input
            required
            type="text"
            placeholder="phone"
            name="phone"
            className="sm:py-2 py-1 outline-none pl-2 placeholder:italic bg-[rgba(255,255,255,0.07)] rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Gender</label>
          <select
            required
            name="gender"
            id=""
            className="w-full py-3 bg-[rgba(255,255,255,0.07)] outline-none rounded pl-2"
          >
            <option value="male" className="text-black">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-lg">Set Time</h1>
            <h1
              onClick={() => {
                setShow(!show);
              }}
              className={`text-lg cursor-pointer ${show ? "hidden" : ""}`}
            >
              Hide all
            </h1>
            <h1
              onClick={() => {
                setShow(!show);
              }}
              className={`text-lg cursor-pointer ${show ? "" : "hidden"}`}
            >
              Show All
            </h1>
          </div>
          <div className={`grid grid-cols-3 gap-2 ${show ? "hidden" : ""}`}>
            {/* checkbox 1*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"06 am to 07 am"}
                name="chackbox1"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">06 am to 07 am</h1>
            </div>
            {/* checkbox 2*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"07 am to 08 am"}
                name="chackbox2"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">07 am to 08 am</h1>
            </div>
            {/* checkbox 3*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"08 am to 09 am"}
                name="chackbox3"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">08 am to 09 am</h1>
            </div>
            {/* checkbox 4*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"09 am to 10 am"}
                name="chackbox4"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">09 am to 10 am</h1>
            </div>
            {/* checkbox 5*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"10 am to 11 am"}
                name="chackbox5"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">10 am to 11 am</h1>
            </div>
            {/* checkbox 6*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"11 am to 12 pm"}
                name="chackbox6"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">11 am to 12 pm</h1>
            </div>
            {/* checkbox 7*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"12 pm to 01 pm"}
                name="chackbox7"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">12 pm to 01 pm</h1>
            </div>
            {/* checkbox 8*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"01 pm to 02 pm"}
                name="chackbox8"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">01 pm to 02 pm</h1>
            </div>
            {/* checkbox 9*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"02 pm to 03 pm"}
                name="chackbox9"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">02 pm to 03 pm</h1>
            </div>
            {/* checkbox 10*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"03 pm to 04 pm"}
                name="chackbox10"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">03 pm to 04 pm</h1>
            </div>
            {/* checkbox 11*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"04 pm to 05 pm"}
                name="chackbox11"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">04 pm to 05 pm</h1>
            </div>
            {/* checkbox 12*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"05 pm to 06 pm"}
                name="chackbox12"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">05 pm to 06 pm</h1>
            </div>
            {/* checkbox 13*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"06 am to 07 am"}
                name="chackbox13"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">06 pm to 07 pm</h1>
            </div>
            {/* checkbox 14*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"07 pm to 08 pm"}
                name="chackbox14"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">07 pm to 08 pm</h1>
            </div>
            {/* checkbox 15*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"08 pm to 09 pm"}
                name="chackbox15"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">08 pm to 09 pm</h1>
            </div>
            {/* checkbox 15*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"09 pm to 10 pm"}
                name="chackbox16"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">09 pm to 10 pm</h1>
            </div>
            {/* checkbox 17*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"10 pm to 11 pm"}
                name="chackbox17"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">10 pm to 11 pm</h1>
            </div>
            {/* checkbox 18*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"11 pm to 12 am"}
                name="chackbox18"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">11 pm to 12 am</h1>
            </div>
            {/* checkbox 19*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"12 am to 01 am"}
                name="chackbox19"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">12 am to 01 am</h1>
            </div>
            {/* checkbox 20*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"01 am to 02 am"}
                name="chackbox20"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">01 am to 02 am</h1>
            </div>
            {/* checkbox 21*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"02 am to 03 am"}
                name="chackbox21"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">02 am to 03 am</h1>
            </div>
            {/* checkbox 22*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"03 am to 04 am"}
                name="chackbox22"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">03 am to 04 am</h1>
            </div>
            {/* checkbox 23*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"04 am to 05 am"}
                name="chackbox23"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">04 am to 05 am</h1>
            </div>
            {/* checkbox 24*/}
            <div className="flex">
              <input
                type="checkbox"
                value={"05 am to 06 am"}
                name="chackbox24"
                className="checkbox"
              />{" "}
              <h1 className="ml-5">05 am to 06 am</h1>
            </div>
          </div>
        </div>
        <h1 className="text-red-600">{error}</h1>
        <button
          type="submit"
          className="w-full bg-white text-black sm:py-2 py-1 mt-2 font-medium rounded hover:bg-slate-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Coach;
