// GLOBAL CSS
import "./index.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
// import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import moment from "moment";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BgBanner from "../../assets/img/bg-full.jpg";

function LandingPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [dateShow, setDateShow] = useState(moment().format("YYYY,MM,DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    // console.log("searc is update");
    getDataProduct();
    generateDate();
  }, [page, searchName, dateShow]);

  // useEffect(() => {
  // }, [dateShow]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `event?page=${page}&limit=4 &name=${searchName}&dateTimeShow=${dateShow}`
      );
      // console.log(result);
      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };
  // console.log(dateShow);
  const selectDate = (date) => {
    setDateShow(date);
  };
  // console.log("DATE ACTIVE = " + dateShow);

  const handleSearchName = async () => {
    setSearchName(keyword);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  // console.log(keyword);
  return (
    <>
      <Header />

      <section className="banner">
        <img src={BgBanner} alt="banner" className="w-100" />
        <div className="container-banner">
          <div className=" search-div">
            <h1>
              Find Event You Love <br />
              With Our
            </h1>
            <div className="search-container d-flex ">
              <div className="input-group rounded ">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  className="btn btn-search lnr lnr-search"
                  style={{ backgroundColor: "#ff3d71" }}
                  onClick={handleSearchName}
                >
                  <span
                    className="lnr lnr-magnifier"
                    // style="font-size: 15px;"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="box1">— event</div>
      <h3 className="text-center my-5">Event For You</h3>
      <div className="date">
        {listDateShow.map((item, index) => (
          <button
            key={index}
            style={{ margin: "0 10px" }}
            className={index === 2 ? "active" : ""}
            // className="btn-date"
            onClick={() => {
              selectDate(moment(item).format("YYYY,MM,DD"));
            }}
          >
            <div>{moment(item).format("DD")}</div>
            <small>{moment(item).format("ddd")}</small>
          </button>
        ))}
      </div>
      {/* card */}
      <div className="container my-5 d-flex justify-content-center">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.eventId}>
              <Card
                data={item}
                newData="new data"
                // handleDetail={handleDetailProduct}
              />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </div>
      <div className="pagination">
        <button
          className="btn btn-primary btn-search"
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
        >
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
