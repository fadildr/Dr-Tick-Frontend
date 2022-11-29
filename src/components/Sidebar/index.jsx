import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logout } from "../../stores/actions/auth";
// import { useState } from "react";
export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const dataLogout = {
    email: user.data.email,
    password: user.data.password,
  };
  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout(dataLogout));
        localStorage.clear();
        navigate("/");
        MySwal.fire({ title: "Succes Logout!", icon: "success" });
      }
    });
    // dispatch(logout(dataLogout));
  };

  return (
    <div>
      <div className="list-group ">
        <div className="profile-img d-flex mb-4">
          <img
            src={
              user.data.image
                ? `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1663760408/${user.data.image}`
                : `https://ui-avatars.com/api/?name=${user.data.username}&background=a0a0a0&size=60&color=ffffff`
            }
            className="avatar-sidebar rounded-circle "
            alt="avatar"
            style={{ width: "70px", height: "70px" }}
          />
          <div className="title-profile">
            <p className="profile-name">{user.data.username}</p>
            <p className="profile-job">
              {user.data.profession
                ? user.data.profession
                : "profession not set"}
            </p>
          </div>
        </div>
        <div
          className="list-group-item list-group-item-profile d-flex  "
          onClick={() => {
            navigate("/profile");
          }}
        >
          <i className="bi bi-person "></i>
          <p>Profile</p>
        </div>
        <div
          className="list-group-item list-group-item-profile d-flex  "
          // onClick={navigate("/update-password")}
          onClick={() => {
            navigate("/updatePassword");
          }}
        >
          <i className="bi bi-lock "></i>
          <p>Update Password</p>
        </div>
        <div
          // onClick={navigate("/my-booking")}
          className="list-group-item list-group-item-profile d-flex"
        >
          <i className="bi bi-journal-richtext"></i>
          <p> My Booking</p>
        </div>
        <div
          className="list-group-item list-group-item-profile d-flex"
          // onClick={navigate("/wishlist")}
        >
          <i className="bi bi-heart-fill"></i>
          <p>My Wishlist</p>
        </div>

        <div
          className="list-group-item list-group-item-profile d-flex"
          onClick={handleLogout}
          style={{ color: "red " }}
        >
          <i className="bi bi-box-arrow-right text-danger"></i>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}
