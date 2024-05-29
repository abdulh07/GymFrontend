/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContex } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const SessionSingleForUser = ({ session, setRefresh, refresh }) => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();
  const { userEmail, coach, date, time, _id } = session;
  const workTime = session.coach.workTime;
  const handleUpdateUserSeassion = (event) => {
    event.preventDefault();
    const workTime = event.target.workTime.value;
    if (workTime === time || workTime === "") {
      return toast.error("already selected");
    }

    const updateData = {
      time : workTime,
      _id,
    };
    fetch(`http://localhost:5000/api/v1/booking/update`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Time updated successfully");
          setRefresh(refresh + 1);
        }
      });
  };
  const handleDeleteUserSeassion = () => {
    fetch(`http://localhost:5000/api/v1/booking/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Delete successfull");
          setRefresh(refresh + 1);
        }
      });
  };

  const handleChatClick=(event)=>{
    event.preventDefault()
   const payload={
    coachId: coach._id,
    msg: "",
    userId:user._id
}

    fetch(`http://localhost:5000/api/v1/user/create-chat`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .then((data) => {

      navigate("/chat");
      
    })
    .catch((error)=>{
      console.error('error: ', error);
      
    })

  }
  return (
    <form
      onSubmit={handleUpdateUserSeassion}
      className=" flex flex-col items-start gap-5 border rounded bg-blue-500 p-10 text-white"
    >
      <div className="flex items-center gap-3">
        {coach?.photo ? (
          <img
            src={coach?.photo}
            alt=""
            className="size-16 rounded-full object-cover object-center"
          />
        ) : (
          <div className="size-16 rounded-full bg-white"></div>
        )}
        <h1 className="text-lg font-medium">
          {coach.firstName}
          {coach.lastName}
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <h1>{date}</h1>
        <select
          name="workTime"
          className="py-2 px-2 text-black rounded outline-none"
        >
          <option selected disabled value="">
            {session.time}
          </option>
          {workTime.map((data, i) => (
            <option defaultValue={time} key={i} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex items-center gap-3 text-black font-medium">
        <button
          type="submit"
          className="w-full py-2 bg-slate-100 rounded hover:bg-white"
        >
          Update
        </button>
        <button
          type="button"
          onClick={handleDeleteUserSeassion}
          className="w-full py-2 bg-slate-100 rounded hover:bg-white"
        >
          Delete
        </button>
      <button
          type="button"

          onClick={handleChatClick}
          className="w-full py-2 bg-slate-100 rounded hover:bg-white"
        >
          chat
        </button>
      </div>
        <button
          type="button"
          onClick={()=>{navigate(`/exercises/${_id}`)}}

          className="w-full py-2 bg-slate-100 rounded text-black hover:bg-white"
        >
          Exercises 
        </button>
    </form>
  );
};

export default SessionSingleForUser;
