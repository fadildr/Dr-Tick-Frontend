import "./index.css";
import icon from "../../assets/img/icon.png";
import doll from "../../assets/img/character.png";
import facebook from "../../assets/img/fb.svg";
import google from "../../assets/img/google.svg";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function Signin() {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("userId", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);

      // navigate("/");
    } catch (error) {
      console.error(error);
      //   console.error(error.response);
    }
  };
  return (
    <>
      {/* Hello world */}
      <div className="container-fluid w-100 h-100">
        <div className="row">
          {/* banner */}
          <div className="col-9 bg-primary content__img">
            <img src={doll} alt="" className="character__img--auth  " />
          </div>
          {/* form */}
          <div className="col-3 d-flex align-items-center justify-content-center contents ">
            <div className="row justify-content-center">
              <div className="col-md-8 form">
                <div className="mb-4">
                  <img src={icon} alt="" className="icon-auth" />
                  <div className="desc">
                    <p className="title">Sign In</p>
                    <p className="caption">Hi Welcome Back to Dr-ticket</p>
                  </div>
                </div>

                <div className="form-group first">
                  <div className="input-group input-group-outline mb-2">
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
                      // required=""
                      type="password"
                      className="form-control rounded-4 text"
                      placeholder="Password"
                      onChange={handleChangeForm}
                    />
                  </div>
                  <a href="#" className="forgot-pass caption">
                    Forgot Password?
                  </a>

                  <button
                    className="btn w-100 rounded-4 my-4 mb-2"
                    onClick={handleLogin}
                  >
                    Signin
                  </button>
                  <span className="d-block text-center my-4 text-muted desc-caption">
                    or Sign In with
                  </span>
                  <div className="social-login">
                    <div className="google">
                      {" "}
                      <a href="#">
                        <img src={google} alt="google" className="img-google" />
                      </a>
                    </div>
                    <div className="fb">
                      <a href="#">
                        <img src={facebook} alt="fb" className="img-fb" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Signin;
