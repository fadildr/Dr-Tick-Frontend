import Header from "../../components/Header";
import Footer from "../../components/Footer";
import avatar from "../../assets/img/john.svg";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePasswordUser } from "../../stores/actions/user";
import { useNavigate } from "react-router-dom";
import { logout } from "../../stores/actions/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState([]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(e.target.value);
  };
  const userId = user.data.userId;
  const dataLogout = {
    email: user.data.email,
    password: user.data.password,
  };

  const handleUpdatePassword = async () => {
    dispatch(updatePasswordUser(form, userId));
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
  };
  return (
    <div>
      <Header />
      <div className="container-fluid container-profile">
        <div className="row">
          <div className="col-3  ">
            <div className="list-group ">
              <div className="profile-img d-flex mb-4">
                <img src={avatar} alt="" />
                <div className="title-profile">
                  <p className="profile-name">{user.data.username}</p>
                  <p className="profile-job">{user.data.job}</p>
                </div>
              </div>
              <div className="list-group-item list-group-item-profile d-flex  ">
                <i className="fa fa-user "></i>
                <p>Profile</p>
              </div>
              <div className="list-group-item list-group-item-profile d-flex  ">
                <i className="fa fa-user "></i>
                <p>Update Password</p>
              </div>
              <div className="list-group-item list-group-item-profile d-flex">
                <i className="fa fa-book"></i>
                <p> My Booking</p>
              </div>
              <div className="list-group-item list-group-item-profile d-flex">
                <i className="fa fa-heart "></i>
                <p>My Wishlist</p>
              </div>

              <div
                className="list-group-item list-group-item-profile d-flex"
                // onClick={handleLogout}
              >
                <i className="fa fa-right-from-bracket"></i>
                <p onClick={handleLogout}>Log Out</p>
              </div>
            </div>
          </div>
          <div className="col-9 rounded bg-primary">
            <div className="card-profile bg-danger">
              <div className="row p-4 ">
                <h4>
                  <b>Change Password</b>
                </h4>
                <div className="col-8 text-center ">
                  <div className="label d-flex">
                    <p>Password</p>
                    <div className="edit name">
                      <input
                        type="text"
                        // placeholder={user.data.username}
                        // value={form.pass}
                        onChange={handleChangeForm}
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>New Password</p>
                    <div className="edit name">
                      <input
                        type="text"
                        onChange={handleChangeForm}
                        // placeholder="username"
                        // value={form.username}
                        name="newPassword"
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Confirm Password</p>
                    <div className="edit name">
                      <input
                        type="text"
                        onChange={handleChangeForm}
                        name="confirmPassword"
                        // placeholder="email"
                        // value={form.email}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-save justify-content-center"
                    onClick={handleUpdatePassword}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
