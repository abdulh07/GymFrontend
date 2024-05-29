/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import AdminProfile from "./AdminProfile/AdminProfile";
import UserProfile from "./UserProfile/UserProfile";
import CoachProfile from "./CoachProfile/CoachProfile";
import { AuthContex } from "../../Context/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContex);
  return (
    <div>
      
      <div className={`${user?.role === "admin" ? "" : "hidden"}`}>
        <AdminProfile></AdminProfile>
      </div>
      <div className={`${user?.role === "user" ? "" : "hidden"}`}>
        <UserProfile></UserProfile>
      </div>
      <div className={`${user?.role === "coach" ? "" : "hidden"}`}>
        <CoachProfile></CoachProfile>
      </div>
    </div>
  );
};

export default Profile;
