import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import avatar from "../../assets/img/john.svg";
import moment from "moment";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
} from "../../stores/actions/event";

import "./index.css";
export default function createEvent() {
  moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const event = useSelector((state) => state.event);

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    dispatch(getDataEvent());
  }, []);

  const handleSubmit = () => {
    // HANYA DIGUNAKAN KETIKA INPUT ADA YANG BERTIPE DATA FILE
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };
  const setUpdate = (data) => {
    setIsUpdate(true);
    setEventId(data.id);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      detail: data.detail,
      dateTimeShow: data.dateTimeShow,
      price: data.price,
      image: data.image,
    });
  };
  const handleUpdate = () => {
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(updateDataEvent(formData, eventId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      resetForm();
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      location: "",
      detail: "",
      dateTimeShow: "",
      price: "",
      image: "",
    });
    setImage("");
  };

  const handleChangeForm = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }

    console.log(e.target.files);
  };
  console.log(setUpdate);
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
                  <p className="profile-job">Entrepener</p>
                </div>
              </div>
              <a
                className="list-group-item list-group-item-profile d-flex  "
                href="#!"
              >
                <i className="fa fa-user "></i>
                <p>Profile</p>
              </a>
              <a
                className="list-group-item list-group-item-profile d-flex"
                href="#!"
              >
                <i className="fa fa-book"></i>
                <p>Create Event</p>
              </a>
              <a
                className="list-group-item list-group-item-profile d-flex"
                href="#!"
              >
                <i className="fa fa-book"></i>
                <p> My Booking</p>
              </a>
              <a
                className="list-group-item list-group-item-profile d-flex"
                href="#!"
              >
                <i className="fa fa-heart "></i>
                <p>My Wishlist</p>
              </a>
              <a
                className="list-group-item list-group-item-profile d-flex"
                href="#!"
              >
                <i className="fa fa-gear "></i>
                <p>Settings</p>
              </a>
              <a
                className="list-group-item list-group-item-profile d-flex"
                href="#!"
              >
                <i className="fa fa-right-from-bracket"></i>
                <p>Log Out</p>
              </a>
            </div>
          </div>
          <div className="col-9 rounded">
            <div className="card-profile">
              <div className="row p-4">
                <div
                  className="modal fade"
                  id="exampleModal"
                  // tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-center"
                          id="exampleModalLabel"
                        >
                          Manage Event
                        </h5>
                        {event.message && (
                          <div
                            className={
                              "alert alert-dismissible fade show " +
                              event.isError
                                ? "alert-danger"
                                : "alert-primary"
                            }
                            role="alert"
                          >
                            {event.message}
                          </div>
                        )}
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-center bg-primary">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          onChange={handleChangeForm}
                          value={form.name}
                        />
                        <input
                          type="text"
                          placeholder="Category"
                          name="category"
                          onChange={handleChangeForm}
                          value={form.category}
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          name="location"
                          value={form.location}
                          onChange={handleChangeForm}
                        />
                        <textarea
                          placeholder="Detail"
                          cols="22"
                          rows="2"
                          name="detail"
                          value={form.detail}
                          onChange={handleChangeForm}
                        ></textarea>
                        <input
                          type="date"
                          className=""
                          name="dateTimeShow"
                          value={form.dateTimeShow}
                          onChange={handleChangeForm}
                        />
                        <input
                          type="number"
                          placeholder="Price"
                          name="price"
                          value={form.price}
                          onChange={handleChangeForm}
                        />
                        <input
                          type="file"
                          name="image"
                          // value={form.image}
                          onChange={handleChangeForm}
                        />
                      </div>
                      <div className="modal-footer">
                        {image && <img src={image} alt="view image" />}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={isUpdate ? handleUpdate : handleSubmit}
                        >
                          {event.isLoading ? (
                            <div
                              className="spinner-border text-white"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                            <div>{isUpdate ? "Update" : "Save"}</div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="mb-3">
                  <b>Manage Event</b>
                </h4>
                <div className="col-8  ">
                  {event.data.length > 0 ? (
                    event.data.map((item) => (
                      <div key={item.id}>
                        <div className="crud-event d-flex">
                          <p className="dt text-center">
                            <div>{moment(item).format("DD")}</div>
                            <small>{moment(item).format("ddd")}</small>
                          </p>
                          <div className="event-detail">
                            <h4 className="title-event">{item.name}</h4>
                            <p className="location-event">{item.location}</p>
                            <p className="day-event">
                              {moment(item).format("MMM Do YY")}
                            </p>
                            <div className="crud d-flex">
                              <p>Detail</p>
                              <p
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                Update
                              </p>
                              <p>Delete</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1>Data Not Found !</h1>
                  )}
                </div>
                <div className="col-4 ">
                  <button
                    className="btn btn-create-event"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Create Event
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
