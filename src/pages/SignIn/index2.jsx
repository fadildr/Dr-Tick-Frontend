import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    try {
      const result = await axios.post("api/auth/login", form);
      localStorage.setItem("userId", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
      //   console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(showPassword);
  return (
    <div className="container text-center">
      <h1>Login Page</h1> <hr />
      <input
        type="email"
        placeholder="Input your email ..."
        name="email"
        onChange={handleChangeForm}
      />{" "}
      <br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Input your password ..."
        name="password"
        onChange={handleChangeForm}
      />{" "}
      <br />
      <button onClick={handleShowPassword}>
        {showPassword ? "hide" : "show"} Password
      </button>
      <button className="btn btn-primary" onClick={handleLogin}>
        Signin
      </button>
    </div>
  );
}
