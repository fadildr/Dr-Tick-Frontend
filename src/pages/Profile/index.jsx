import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import avatar from "../../assets/img/john.svg";
import moment from "moment";
// import axios from "../../utils"
// import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateDataUser, updateImageUser } from "../../stores/actions/user";
import "./index.css";
export default function Profile() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [form, setForm] = useState(user.data);
  const [formImage, setFormImage] = useState({});
  // const [image, setImage]= useState()
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(e.target.value);
  };
  const userId = form.userId;
  const handleUpdateUser = () => {
    // console.log(data);

    dispatch(updateDataUser(form, userId));
  };
  const handleUpdateImage = () => {
    const formData = new FormData();
    for (const data in formImage) {
      formData.append(data, formImage[data]);
    }
    dispatch(updateImageUser(formData, userId));
    console.log(userId);
    console.log(formData);
  };

  const handleChangeFormImage = (e) => {
    const { name, files } = e.target;
    setFormImage({ ...formImage, [name]: files[0] });
    console.log(files);
  };
  const handleLogout = () => {};
  return (
    <>
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
              <div
                className="list-group-item list-group-item-profile d-flex  "
                // onClick={navigate("/profile")}
              >
                <i className="fa fa-user "></i>
                <p>Profile</p>
              </div>
              <div
                className="list-group-item list-group-item-profile d-flex  "
                // onClick={navigate("/update-password")}
              >
                <i className="fa fa-user "></i>
                <p>Update Password</p>
              </div>
              <div
                // onClick={navigate("/my-booking")}
                className="list-group-item list-group-item-profile d-flex"
              >
                <i className="fa fa-book"></i>
                <p> My Booking</p>
              </div>
              <div
                className="list-group-item list-group-item-profile d-flex"
                // onClick={navigate("/wishlist")}
              >
                <i className="fa fa-heart "></i>
                <p>My Wishlist</p>
              </div>

              <div
                className="list-group-item list-group-item-profile d-flex"
                onClick={handleLogout}
              >
                <i className="fa fa-right-from-bracket"></i>
                <p>Log Out</p>
              </div>
            </div>
          </div>
          <div className="col-9 rounded">
            <div className="card-profile">
              <div className="row p-4">
                <h4>
                  <b>Profile</b>
                </h4>
                <div className="col-8  ">
                  <div className="label d-flex">
                    <p>Name</p>
                    <div className="edit name">
                      <input
                        type="text"
                        // placeholder={user.data.username}
                        value={form.username}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Username</p>
                    <div className="edit name">
                      <input
                        name="username"
                        type="text"
                        placeholder="username"
                        value={form.username}
                        onChange={handleChangeForm}
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Email</p>
                    <div className="edit name">
                      <input
                        type="text"
                        placeholder="email"
                        value={form.email}
                        onChange={handleChangeForm}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Phone Number</p>
                    <div className="edit name">
                      <input
                        type="text"
                        placeholder="nomor"
                        value={form.phone}
                        onChange={handleChangeForm}
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Gender</p>
                    <div className="radio d-flex">
                      <div className="1">
                        <input
                          type="radio"
                          value={form.gender}
                          onChange={handleChangeForm}
                          name="gender"
                        />
                        <label>Male</label>
                      </div>
                      <div className="2">
                        <input
                          type="radio"
                          value={form.gender}
                          onChange={handleChangeForm}
                          name="gender"
                        />
                        <label>Female</label>
                      </div>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Profession</p>
                    <select
                      id="profession"
                      className="dropdown"
                      onChange={handleChangeForm}
                      name="profession"
                    >
                      <option>Entrepeneur</option>
                      <option>Student</option>
                      <option>Programmer</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="label d-flex">
                    <p>Nationality</p>
                    <select
                      id="nationality"
                      className="dropdown"
                      onChange={handleChangeForm}
                      name="nationality"
                    >
                      <option>Entrepeneur</option>
                      <option>Student</option>
                      <option>Programmer</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="label d-flex">
                    <p>Birthday Date</p>
                    <div className="edit">
                      <input
                        type="date"
                        className="birthday-date"
                        name="dateOfBirth"
                        onChange={handleChangeForm}
                        value={moment(form.dateOfBirth).format("YYYY-MM-DD")}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-save "
                    onClick={handleUpdateUser}
                  >
                    save
                  </button>
                </div>
                <div className="col-4 bg-primary text-center pt-4">
                  <img src={avatar} alt="" className="img-profile " />
                  <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleChangeFormImage}
                  />
                  <button type="button" onClick={handleUpdateImage}>
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
