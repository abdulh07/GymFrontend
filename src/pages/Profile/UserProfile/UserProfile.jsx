/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../../Context/UserContext";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import SessionSingleForUser from "./SessionSingleForUser";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState("Home");
  const [loading, setLoading] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const [session, setSession] = useState([]);
  const { user, logOut, count, setCount } = useContext(AuthContex);
  const { photo, lastName, email, firstName } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/user/bookings?email=${email}`)
      .then((res) => res.json())
      .then((data) => setSession(data.bookings));
  }, [user, email, refresh]);



  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/v1/chat/create-chat`,{
  //     "coachId": "6615a531b7c5c538eec9408c",
  //     "msg": "Hello",
  //     "userId": "6619572e888d05ca05c67235"
  //   })
  //     .then((res) => res.json())
  // }, []);



  const handleUpdateProfilePhoto = (event) => {
    setLoading(true);
    event.preventDefault();
    const photo = event.target.photo.files[0];

    const photoData = new FormData();

    photoData.append("file", photo);
    photoData.append("upload_preset", "test-upload");
    photoData.append("cloud_name", "dqeuy96cs");

    // post photo
    fetch("https://api.cloudinary.com/v1_1/dqeuy96cs/image/upload", {
      method: "POST",
      body: photoData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.url) {
          //   update photo
          const updateData = {
            photo: data.url,
            email: user.email,
          };

          fetch(`http://localhost:5000/api/v1/user/updateUser`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                toast.success("update successfull");
                setCount(count + 1);
                setLoading(false);
              } else {
                toast.error("something went worng");
              }
            });
        } else {
          toast.error("something went worng");
          setLoading(false);
        }
      });
  };
  return (
    <div className="my-28 flex  mx-20 min-h-screen">
      <div className="w-[300px] rounded pt-5">
        <button
          onClick={() => {
            setShow("Home");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded w-full"
        >
          Home
        </button>
        <button
          onClick={() => {
            setShow("session");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded w-full mt-5"
        >
          Session
        </button>
        {/* <button
          onClick={() => {
            navigate("/chat");

          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded w-full mt-5"
        >
          Conversation
        </button> */}
        <button
          onClick={() => {
            logOut();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded w-full mt-5"
        >
          Log Out
        </button>
      </div>
      <div className="w-3/4 mx-10 text-center">
        <div className={`${show === "Home" ? "" : "hidden"}`}>
          <h1 className="text-5xl font-bold">User Profile</h1>
          <div>
            <img
              className="size-[250px] rounded-full mx-auto mt-5 object-cover object-center"
              src={photo}
              alt=""
            />
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded mt-2 ${
                showUpdate ? "hidden" : ""
              }`}
              onClick={() => {
                setShowUpdate(true);
              }}
            >
              Update User Photo
            </button>
            <form
              onSubmit={handleUpdateProfilePhoto}
              className={`${showUpdate ? "" : "hidden"}`}
              action=""
            >
              <input type="file" name="photo" id="" />
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded mt-2`}
              >
                {/* loading */}
                <div className="flex items-center">
                  {/* hide loader */}
                  <span className={`${loading ? "" : "hidden"}`}>
                    <ClipLoader className="mr-5 " color="white" size={25} />
                  </span>
                  <span>Update User Photo</span>
                </div>
              </button>
            </form>
          </div>
          <div className="text-start flex flex-col items-center justify-center">
            <h1 className="mt-10 text-4xl font-bold -ml-[15%]">User Info</h1>
            <div className="text-start text-2xl mt-5">
              <h1>
                <span className="font-semibold">First Name </span>: {firstName}
              </h1>
              <h1>
                <span className="font-semibold">Last Name </span> : {lastName}
              </h1>
              <h1>
                <span className="font-semibold">Email </span>: {email}
              </h1>
            </div>
          </div>
        </div>
        <div className={`${show === "session" ? "" : "hidden"}`}>
          {session ? (
            <div className="w-full grid grid-cols-3 gap-5">
              {session.map((data) => (
                <SessionSingleForUser
                  key={data._id}
                  session={data}
                  refresh={refresh}
                  setRefresh={setRefresh}
                ></SessionSingleForUser>
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <span className="text-xl anton">You dont have any session</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
