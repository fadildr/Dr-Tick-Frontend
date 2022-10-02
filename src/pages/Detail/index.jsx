function Detail() {
  return (
    <div>
      return (
      <div
        className="
  container-event
  align-items-center
  justify-content-center
  my-4
  h-100
  rounded-5
  card
  border-0
  px-5
  mx-5
"
      >
        <div className="row content row-cols-2 pt-5 w-100">
          <div className="col text-center">
            <img
              src="./assets/img/bg-card2.png"
              alt="event-img"
              className="w-60 rounded-5 mb-2"
              style={{ height: 400 }}
            />
            <br />
            <span className="lnr lnr-heart" style={{ fontSize: 15 }}>
              Add To Wishlist
            </span>
          </div>
          <div className="row">
            <div className="col content-text w-100 position-relative">
              <p className="title">
                Sight &amp; Sounds <br />
                Exhibition
              </p>
              <div className="date-location d-flex">
                <p>Jakarta,Indonesia</p>
                <p>Wed,15,Nov,4:00 PM</p>
              </div>
              <div className="attendees border-bottom pb-4">
                <p style={{ fontSize: 12, fontWeight: "bold" }}>Attendees</p>
                <img src="./assets/img/charevent.svg" alt="attandees" />
              </div>
              <div className="event-detail mt-2">
                <p className="title">event detail</p>
                <div className="event-desc">
                  <p>
                    After his controversial art exhibition Tear and Consume back
                    in November 2018, in which guests were invited to tear up…
                  </p>
                </div>
                <p className="title">Location</p>
              </div>
              <div className="map container">
                <img src="./assets/img/map.png" alt="" />
                <input
                  type="submit"
                  defaultValue="Buy Ticket"
                  className="btn btn-primary btn-buy rounded-4 my-4 mb-2"
                />
              </div>
            </div>
          </div>
          {/* <div class="col">Column</div>
  <div class="col">Column</div> */}
        </div>
      </div>
      );
    </div>
  );
}

export default Detail;
