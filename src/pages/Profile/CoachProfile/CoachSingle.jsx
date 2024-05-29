/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/common/Modal";
import ExerciseForm from "../../../components/Exercise/ExerciseForm";

const CoachSingle = ({ session, setRefresh, refresh }) => {
  const navigate = useNavigate();

  const { userEmail, coach, date, time, _id } = session;
  const [modalOpen, setModalOpen] = useState(false);

  const toggle =()=> setModalOpen(!modalOpen)
  const workTime = session.coach.workTime;
  const handleDeleteUserSeassion = () => {
    fetch(`http://localhost:5000/api/v1/booking/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Booking Cancel");
          setRefresh(refresh + 1);
        }
      });
  };

  return (
    <>
    <form className=" flex flex-col items-start gap-5 border rounded bg-blue-500 p-10 text-white">
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
      <div className="text-start -m-0 -p-0">
        <h1>{date}</h1>
        <h1>{userEmail}</h1>
        <h1>{time}</h1>
      </div>
        <button
          type="button"
          onClick={handleDeleteUserSeassion}
          className="w-full py-2 rounded bg-white text-blue-600 mt-10"
        >
          Cancel Booking
        </button>
      <button
          type="button"
          onClick={()=>{navigate(`/exercises/${_id}`)}}

          className="w-full py-2 bg-slate-100 rounded text-black hover:bg-white"
        >
         View Exercises 
        </button>
        <button
          type="button"
          onClick={toggle}

          className="w-full py-2 bg-slate-100 rounded text-black hover:bg-white"
        >
         Add Exercises 
        </button>
    </form>
    <Modal isOpen={modalOpen} onClose={toggle}>
        <ExerciseForm onClose={toggle}  sessionID={{_id}}/>
      </Modal>
    </>
  );
};

export default CoachSingle;

