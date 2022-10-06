import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import mapimg from "../../assets/img/map.png";
import attendees from "../../assets/img/charevent.svg";

import "./index.css";
function Detail() {
  const userId = localStorage.getItem("userId");
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [dataWishlist, setDataWishlist] = useState({
    userId: `${userId}`,
    eventId: `${id}`,
  });

  useEffect(() => {
    getDetailEvent();
    addWishlist();
  }, []);

  const getDetailEvent = async () => {
    try {
      const result = await axios.get(`event/${id}`);

      setDetail(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const getUserById = async () => {
  //   try {
  //     const result = await axios.get(`user/${localStorage.getItem("userId")}`);
  //     setDataUser(result.data.data[0].userId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const addWishlist = async () => {
    try {
      const result = await axios.post(`wishlist/`, dataWishlist);
      setDataWishlist(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddWishlist = () => {
    console.log(dataWishlist);
  };
  const handleOrder = () => {
    navigate(`/order/${id}`);
  };
  // console.log(dataWishlist);
  return (
    <>
      <Header />
      {/* {detail.map((item) => console.log(item))} */}
      {detail.map((item) => (
        <div key={item.eventId}>
          <div className="container-event my-4 h-100 rounded-5 card-detail border-0 px-5 mx-5">
            <div className="row content row-cols-2 pt-5 w-100">
              <div className="col text-center">
                <img
                  src={`https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${item.image}`}
                  alt=""
                  className="w-60 rounded-5 mb-2 img-event"
                  style={{ height: 400 }}
                />
                <br />
                <button className="btn" onClick={handleAddWishlist}>
                  <span
                    className="lnr lnr-cart "
                    style={{ fontSize: 15 }}
                  ></span>
                </button>
              </div>
              <div className="row">
                <div className="col content-text w-100 position-relative">
                  <p className="title-detail">{item.name}</p>
                  <div className="date-location d-flex">
                    <p>{item.location}</p>
                    <p>{item.dateTimeShow.split("T")[0]}</p>
                  </div>
                  <div className="attendees border-bottom pb-4">
                    <p style={{ fontSize: 12, fontWeight: "bold" }}>
                      Attendees
                    </p>
                    <img src={attendees} alt="attandees" />
                  </div>
                  <div className="event-detail mt-2">
                    <p className="title-detail">event detail</p>
                    <div className="event-desc">
                      <p>{item.detail}</p>
                    </div>
                    <p className="title-detail">Location</p>
                  </div>
                  <div className="map ">
                    <img src={mapimg} alt="" />
                    <button
                      className="btn  btn-buy rounded-4 my-4 mb-2"
                      onClick={handleOrder}
                    >
                      check out
                    </button>
                  </div>
                </div>
              </div>
              {/* <div class="col">Column</div>
  <div class="col">Column</div> */}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Detail;
