/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";

const SingleProfile = ({ application }) => {
  const {
    photo,
    firstName,
    lastName,
    email,
    hight,
    age,
    gender,
    workTime,
    phone,
  } = application;
  const handleconfirmApplicatin = () => {
    const coachData = {
      email,
      hight,
      age,
      gender,
      workTime,
      phone,
    };

    fetch(`http://localhost:5000/api/v1/admin/confirm`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coachData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("coach application successfully aproved");
          window.location.reload();
        }
      });
  };
  const handleRejectApplicatin = () => {
    const coachData = {
      email,
      hight,
      age,
      gender,
      workTime,
      phone,
    };

    fetch(`http://localhost:5000/api/v1/admin/reject`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coachData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("coach application successfully decline");
          window.location.reload();
        }
      });
  };
  return (
    <div className="w-full rounded-md flex flex-col items-center text-white justify-center bg-blue-500 gap-1 py-10">
      <img src={photo} alt="" className="max-w-[200px] w-full" />
      <span className="anton text-left pt-5">
        Name : {firstName} {lastName}
      </span>
      <span className="anton text-left">Email : {email}</span>
      <span className="anton text-left">Phone : {phone}</span>
      <span className="anton text-left">Height : {hight}m</span>
      <span className="anton text-left">Age : {age}y</span>
      <span className="anton text-left">Gender : {gender}</span>
      <div className="w-full flex items-center justify-between gap-5 px-10 pt-10">
        <button
          onClick={handleRejectApplicatin}
          className="w-full py-3 rounded-md bg-slate-200 transition-colors duration-300 text-black font-medium text-lg hover:bg-white"
        >
          Reject
        </button>
        <button
          onClick={handleconfirmApplicatin}
          className="w-full py-3 rounded-md bg-slate-200 transition-colors duration-300 text-black font-medium text-lg hover:bg-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default SingleProfile;
