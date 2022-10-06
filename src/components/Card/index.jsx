import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
// import React from 'react'

export default function Card(props) {
  const navigate = useNavigate();
  //   let date = props.date.dateTimeShow.split("T")[1];
  //   console.log(date);
  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };

  return (
    <div className="card border-0" onClick={handleDetail}>
      <img
        className="card-img  rounded-5"
        src={`https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${props.data.image}`}
        alt="Card image cap"
      />
      <div
        className="card-body d-flex flex-column justify-content-end "
        style={{ top: "50px" }}
      >
        <h5 className="card-title text-white">
          {props.data.dateTimeShow.split("T")[0]}
          {/* style={{ fontsize: "10px" }} */}
        </h5>
        <p className="card-text">{props.data.name}</p>
        {/* <button className="btn btn-primary">Go somewhere 1</button> */}
        {/* <button
          className="btn btn-primary"
          onClick={() => props.handleDetail(props.data.id)}
        >
          Go somewhere 2
        </button> */}
      </div>
    </div>
  );
}
