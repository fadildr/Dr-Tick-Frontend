import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar/index";
// import avatar from "../../assets/img/john.svg";
import moment from "moment";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataEvent,
  createDataEvent,
  updateDataEvent,
  deleteDataEvent,
} from "../../stores/actions/event";

import "./index.css";

export default function createEvent() {
  // moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  // const user = useSelector((state) => state.user);
  const event = useSelector((state) => state.event);

  const [form, setForm] = useState({}); //(moment().format("yyyy-MM-dd"));
  const [image, setImage] = useState("");
  const [eventId, setEventId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  // console.log(setIsUpdate);
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
      MySwal.fire({ title: <p>{event.message}</p> });
      resetForm();
    });
  };
  const setUpdate = (data) => {
    console.log(data);
    setIsUpdate(true);
    setEventId(data.eventId);
    setForm({
      name: data.name,
      category: data.category,
      location: data.location,
      detail: data.detail,
      dateTimeShow: moment(data.dateTimeShow).format("YYYY-MM-DD"), //.moment().format("yyyy-MM-dd"),
      price: data.price,
      image: data.image,
    });
  };
  // console.log(data);
  const handleUpdate = () => {
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    dispatch(updateDataEvent(formData, eventId)).then(() => {
      dispatch(getDataEvent());
      setIsUpdate(false);
      console.log(event);
      MySwal.fire({ title: <p>{event.message}</p> });
      resetForm();
    });
  };
  // const handleDelete = () => {
  // }

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

    // console.log(e.target.files);
  };
  const handleDelete = (id) => {
    console.log(id);
    MySwal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDataEvent(id));
        dispatch(getDataEvent());
        Swal.fire("Deleted!", "Event has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Header />

      <div className="container-fluid container-profile">
        <div className="row">
          <div className="col-3  ">
            <Sidebar />
          </div>
          <div className="col-9 rounded">
            <div className="card-profile">
              <div className="row p-4 bg-white">
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

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-center ">
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
                          accept="image/*"
                        />
                      </div>
                      <div className="modal-footer">
                        {image && (
                          <img
                            src={image}
                            alt="view image"
                            style={{
                              width: "300px",
                              margin: "auto",
                            }}
                          />
                        )}
                        <button
                          type="button"
                          className="w-100 my-5 btn btn-primary"
                          onClick={isUpdate ? handleUpdate : handleSubmit}
                        >
                          {event.isLoading ? (
                            <div
                              className="spinner-border text-primary"
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
                        <div
                          className="crud-event d-flex"
                          // setUpdate={setUpdate}
                        >
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
                                onClick={() => setUpdate(item)}
                              >
                                Update
                              </p>
                              <p onClick={() => handleDelete(item.eventId)}>
                                Delete
                              </p>
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
