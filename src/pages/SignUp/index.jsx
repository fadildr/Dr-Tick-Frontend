import "./index.css";
import icon from "../../assets/img/icon.png";
import doll from "../../assets/img/character.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function SignUp() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    setLoading(true);
    try {
      // console.log(form)
      const result = await axios.post("auth/register", form);
      setLoading(false);
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: result.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/signin");
    } catch (error) {
      setLoading(false);
      // alert(result.data.msg);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* banner */}
        <div className="col-9 bg-primary content__img">
          <img src={doll} alt="" className="character__img--auth" />
        </div>
        {/* form */}
        <div className="col-3 d-flex align-items-center justify-content-center contents">
          <div className="row section-left  ">
            <div className="col-md-8 form  ">
              <div className="mb-4">
                <img src={icon} alt="" className="icon" />
                <div className="desc">
                  <p className="title">Sign Up</p>
                  <div className="caption d-flex">
                    Already have an account?
                    <p
                      onClick={() => {
                        navigate("/signin");
                      }}
                      style={{
                        width: "50px",
                        cursor: "pointer",
                        color: "blue",
                      }}
                    >
                      Login
                    </p>
                  </div>
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
                  disabled={
                    !form.email || !form.password || !form.username
                      ? true
                      : false
                  }
                >
                  {loading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
