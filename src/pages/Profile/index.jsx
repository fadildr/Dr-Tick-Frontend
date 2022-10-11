import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import avatar from "../../assets/img/john.svg";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";
export default function Profile() {
  const user = useSelector((state) => state.user);

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
                <h4>
                  <b>Profile</b>
                </h4>
                <div className="col-8  ">
                  <div className="label d-flex">
                    <p>Name</p>
                    <div className="edit name">
                      <p>{user.data.username}</p>
                      <p className="link-edit">edit</p>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Username</p>
                    <div className="edit name">
                      <p>{user.data.username}</p>
                      <p className="link-edit">edit</p>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Email</p>
                    <div className="edit ">
                      <p>{user.data.email}</p>
                      <p className="link-edit">edit</p>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Phone Number</p>
                    <div className="edit number">
                      <p>08xxxxxxxx</p>
                      <p className="link-edit">edit</p>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Gender</p>
                    <div className="radio d-flex">
                      <div className="1">
                        <input type="radio" name="Gender" />
                        <label>Male</label>
                      </div>
                      <div className="2">
                        <input type="radio" name="Gender" />
                        <label>Female</label>
                      </div>
                    </div>
                  </div>
                  <div className="label d-flex">
                    <p>Profession</p>
                    <select
                      id="profession"
                      name="profession"
                      className="dropdown"
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
                      id="profession"
                      name="profession"
                      className="dropdown"
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
                      <input type="date" className="birthday-date" />
                    </div>
                  </div>
                  <div className="btn btn-save ">save</div>
                </div>
                <div className="col-4 bg-primary "> col 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
