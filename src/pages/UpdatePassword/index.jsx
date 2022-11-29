import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePasswordUser } from "../../stores/actions/user";
export default function UpdatePassword() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [form, setForm] = useState([]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(e.target.value);
  };
  const userId = user.data.userId;

  const handleUpdatePassword = async () => {
    dispatch(updatePasswordUser(form, userId));
  };

  return (
    <div>
      <Header />
      <div className="container-fluid container-profile mb-5 ">
        <div className="row">
          <div className="col-3  ">
            <Sidebar />
          </div>
          <div className="col-9 rounded bg-white">
            <div className="card-profile">
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
