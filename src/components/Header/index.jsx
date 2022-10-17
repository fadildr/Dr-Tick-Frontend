import React from "react";
import "./index.css";
import logo from "../../assets/img/icon.png";
// import avatar from "../../assets/img/google.svg";
import avatar from "../../assets/img/john.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { logout } from "../../stores/actions/auth";
export default function Header() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const MySwal = withReactContent(Swal);

  // const isLogin = false;
  const user = useSelector((state) => state.user);
  // const imgUser = `${user.data.image}`;
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleUser = async () => {
    navigate("/profile");
  };
  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
        MySwal.fire({ title: "Succes Logout!", icon: "success" });
      }
    });
    // dispatch(logout(dataLogout));
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
      <div className="container-fluid  ">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="/">
                  Home Anchor
                </a> */}
            </li>
            <li className="nav-item">
              <Link to="/detail" className="nav-link">
                Create Event
              </Link>
              {/* <a className="nav-link" href="/detail">
                  Create Event
                </a> */}
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Location
              </Link>
              {/* <a className="nav-link" href="#">
                  Location
                </a> */}
            </li>
          </ul>
          <div className="d-flex gap-3">
            {/* TAMPILAN JIKA LOGIN */}
            {isLogin ? (
              <>
                <div style={{ cursor: "pointer" }} onClick={handleUser}>
                  <img
                    src={
                      user.data.image
                        ? `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1663760408/${user.data.image}`
                        : avatar
                    }
                    className="avatar"
                    alt="avatar"
                  />
                </div>
                <p className="my-auto">
                  {user.data.username ? user.data.username : "Anonymous"}
                </p>
                <button className="btn" onClick={handleLogout}>
                  logout
                </button>
                {/* <p className="my-auto">{name || "Anonymous"}</p> */}
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleNavigate("signin")}
                >
                  Signin
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigate("signup")}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// const styles = StyleSheet.create({});
