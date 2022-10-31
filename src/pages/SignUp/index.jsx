import "./index.css";
import icon from "../../assets/img/icon.png";
import doll from "../../assets/img/character.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    try {
      // console.log(form)
      const result = await axios.post("auth/register", form);

      alert(result.data.msg);

      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* banner */}
        <div className="col-9 bg-primary content__img">
          <img src={doll} alt="" className="character__img img-fluid" />
        </div>
        {/* form */}
        <div className="col-3 d-flex align-items-center justify-content-center contents">
          <div className="row justify-content-center  section-left  ">
            <div className="col-md-8 form  ">
              <div className="mb-4">
                <img src={icon} alt="" className="icon" />
                <div className="desc">
                  <p className="title">Sign Up</p>
                  <p className="caption">
                    Already have an account? <a href="../index.html">Login</a>
                  </p>
                </div>
              </div>

              <div className="form-group first">
                <div className="input-group input-group-outline mb-3">
                  <input
                    name="username"
                    required=""
                    type="text"
                    className="form-control  rounded-4 text"
                    placeholder="Username"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="input-group input-group-outline mb-3">
                  <input
                    name="email"
                    required=""
                    type="text"
                    className="form-control rounded-4 text"
                    placeholder="Email"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="input-group input-group-outline mb-3">
                  <input
                    name="password"
                    required=""
                    type="password"
                    className="form-control rounded-4 text"
                    placeholder="Password"
                    onChange={handleChangeForm}
                  />
                </div>

                <div className="checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="caption text">
                    Accept Term &amp; Condition
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn rounded-4 btn-primary w-100 my-4 mb-2"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
