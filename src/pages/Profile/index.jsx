import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

import moment from "moment";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  updateDataUser,
  updateImageUser,
  getDataUser,
} from "../../stores/actions/user";
import "./index.css";
export default function Profile() {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  // require("dotenv").config();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState(user.data);
  const [formImage, setFormImage] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const userId = form.userId;
  const handleUpdateUser = async () => {
    setLoading(true);
    try {
      await dispatch(updateDataUser(form, userId));
      await dispatch(getDataUser(userId));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateImage = async () => {
    const formData = new FormData();
    for (const data in formImage) {
      formData.append(data, formImage[data]);
    }
    setLoading(true);
    try {
      await dispatch(updateImageUser(formData, userId));
      await dispatch(getDataUser(userId));
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Success Update Image",
        showConfirmButton: false,
        timer: 1500,
      });
      setImage("");
      setLoading(false);
    } catch (error) {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleChangeImage = (e) => {
    const { name, files } = e.target;

    if (name === "image") {
      setFormImage({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      console.log("object");
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid container-profile">
        <div className="row">
          <div className="col-3  ">
            <Sidebar />
          </div>
          <div className="col-9 bg-white">
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
                        placeholder={form.username}
                        // value={form.username}
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
                          onChange={handleChangeForm}
                          name="gender"
                          checked={form.gender == "male" ? true : false}
                          value="male"
                        />
                        <label>Male</label>
                      </div>
                      <div className="2">
                        <input
                          type="radio"
                          checked={form.gender == "female" ? true : false}
                          onChange={handleChangeForm}
                          name="gender"
                          value="female"
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
                      <option>Indonesia</option>
                      <option>Japan</option>
                      <option>United State</option>
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
                    {loading ? (
                      <div className="spinner-border text-white" role="status">
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      "Save"
                    )}
                  </button>
                </div>
                <div className="col-4  text-center align-item-center pt-4">
                  <div className="align-item-center w-100">
                    <img
                      src={
                        image
                          ? image
                          : user.data.image
                          ? `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1663760408/${user.data.image}`
                          : `https://ui-avatars.com/api/?name=${user.data.username}&background=a0a0a0&size=44&color=ffffff`
                      }
                      alt="profile"
                      className="img-profile rounded-circle mb-5"
                      // style={{ borderRadius: "20px" }}
                    />
                  </div>
                  {image ? (
                    <button className="btn" onClick={handleUpdateImage}>
                      {loading ? (
                        <div
                          className="spinner-border text-white"
                          role="status"
                        >
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        "Save"
                      )}
                    </button>
                  ) : (
                    <>
                      <input
                        className="input-img-profile bg-primary"
                        name="image"
                        onChange={handleChangeImage}
                        id="files"
                        style={{ visibility: "hidden" }}
                        type="file"
                      />
                      <div style={{ marginTop: "-70px" }}>
                        <label
                          htmlFor="files"
                          className="btn"
                          // style={{ marginRight: "100px" }}
                        >
                          Update Image
                        </label>
                      </div>
                    </>
                  )}
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
