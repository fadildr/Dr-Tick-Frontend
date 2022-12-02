import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios";
import moment from "moment";
import mapimg from "../../assets/img/map.png";
import attendees from "../../assets/img/charevent.svg";
import { addWishlist } from "../../stores/actions/wishlist";
import "./index.css";
function Detail() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const userId = user.data.userId;
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [wishlist, setWishlist] = useState(false);
  // const [searchEvent, setSearchEvent] = useState(false)
  useEffect(() => {
    getDetailEvent();
    getWishlistByUserId();
  }, []);
  console.log(userId);
  const getWishlistByUserId = async () => {
    try {
      const result = await axios.get(`wishlist/?userId=${userId}`);
      // getWishlistByUserId();
      console.log(result);
      const searchEvent = result.data.data.filter(
        (item) => id === item.eventId
      );
      console.log(searchEvent);
      if (searchEvent.length > 0) {
        setWishlist(true);
      } else {
        setWishlist(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDetailEvent = async () => {
    try {
      const result = await axios.get(`event/${id}`);

      setDetail(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const dataWishlist = {
    userId,
    eventId: id,
  };
  const handleAddWishlist = async () => {
    try {
      dispatch(addWishlist(dataWishlist));
      getWishlistByUserId();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrder = () => {
    navigate(`/order/${id}`);
  };

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
                {user.data.role === "Admin" ? (
                  ""
                ) : wishlist ? (
                  <i
                    className="bi bi-heart-fill text-danger"
                    onClick={handleAddWishlist}
                  ></i>
                ) : (
                  <i className="bi bi-heart" onClick={handleAddWishlist}></i>
                )}
              </div>
              <div className="row">
                <div className="col content-text w-100 position-relative">
                  <p className="title-detail">{item.name}</p>
                  <div className="date-location d-flex">
                    <div className="d-flex">
                      <i className="bi bi-geo-alt text-danger"></i>
                      <p>{item.location}</p>
                    </div>
                    <div className="d-flex">
                      <i className="bi bi-clock text-danger"></i>
                      <p>
                        {moment(item.dateTimeShow).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                    </div>
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
                    {user.data.role === "Admin" ? (
                      <button
                        className="btn  btn-buy rounded-4 my-4 mb-2"
                        onClick={() => {
                          navigate("/createevent");
                        }}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn  btn-buy rounded-4 my-4 mb-2"
                        onClick={handleOrder}
                      >
                        check out
                      </button>
                    )}
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
