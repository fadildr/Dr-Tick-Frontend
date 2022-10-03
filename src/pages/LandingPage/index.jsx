// GLOBAL CSS
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BgBanner from "../../assets/img/bg-full.jpg";
import card from "../../assets/img/bg-card1.png";
import character from "../../assets/img/charevent.svg";
function LandingPage() {
  return (
    <>
      <Header />
      <section className="banner">
        <img src={BgBanner} alt="banner" className="w-100" />
        <div className="container-banner ">
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
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="box1">— event</div>
      <h3 className="text-center my-5">Event For You</h3>
      <div className="date mb-5">
        <ul className="side">
          <li>15</li>
          <li>Wed</li>
        </ul>
        <ul className="side">
          <li>15</li>
          <li>Wed</li>
        </ul>
        <ul className="middle">
          <li>15</li>
          <li>Wed</li>
        </ul>
        <ul className="side">
          <li>15</li>
          <li>Wed</li>
        </ul>
        <ul className="side">
          <li>15</li>
          <li>Wed</li>
        </ul>
      </div>
      {/* card */}
      <div className="container my-5 d-flex">
        <div className="card border-0">
          <img
            src={card}
            className="card-img h-100 rounded-5"
            alt="image event"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
            <h5 className="card-title text-white">Card title</h5>
            <p className="card-text text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <img src={character} alt="" style={{ width: 90 }} />
          </div>
        </div>
        <div
          className="card border-0"
          style={{ width: 260, cursor: "pointer" }}
        >
          <img
            src={card}
            className="card-img h-100 rounded-5"
            alt="image event"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
            <h5 className="card-title text-white">Card title</h5>
            <p className="card-text text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <img src={character} alt="" style={{ width: 90 }} />
          </div>
        </div>
        <div
          className="card border-0"
          style={{ width: 260, cursor: "pointer" }}
        >
          <img
            src={card}
            className="card-img h-100 rounded-5"
            alt="image event"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
            <h5 className="card-title text-white">Card title</h5>
            <p className="card-text text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <img src={character} alt="" style={{ width: 90 }} />
          </div>
        </div>
        <div
          className="card border-0"
          style={{ width: 260, cursor: "pointer" }}
        >
          <img
            src={card}
            className="card-img h-100 rounded-5"
            alt="image event"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end mb-4">
            <h5 className="card-title text-white">Card title</h5>
            <p className="card-text text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <img src={character} alt="" style={{ width: 90 }} />
          </div>
        </div>
      </div>
      <div className="pagination">
        <button type="button" className="btn btn-outline-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
        <button type="button" className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
