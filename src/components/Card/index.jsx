import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
// import React from 'react'
import moment from "moment";
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
          {moment(props.data.dateTimeShow).format("MMM Do YY")}
        </h5>
        <p className="card-text">{props.data.name}</p>
      </div>
    </div>
  );
}
