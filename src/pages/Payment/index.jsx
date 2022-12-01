import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./index.css";
export default function Payment() {
  const { state } = useLocation();
  const data = state;
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container bg-white container-payment rounded-3">
        <h5 className="mb-3 text-left pt-4">Ticket detail</h5>
        <div className="desc-footer d-flex ">
          <div className="desc-footer-left">
            <p>Ticket Section</p>
            <p>Quantity</p>
            <p>Total Payment</p>
          </div>
          {/* {data.length > 0
            ? data.map((item) => ( */}
          <div>
            <div className="desc-footer-right">
              <p>{data.section}</p>
              <p>{data.totalTicket}</p>
              <p>Rp{data.totalPayment}</p>
            </div>
          </div>
          {/* ))
            : ""} */}
        </div>
        <button
          type="button"
          //   href="payment.html"
          className="btn rounded-4 btn-primary w-100 my-4 mb-2"
          onClick={() => {
            // window.location.href = data.redirect_url;
            window.location.assign(data.redirect_url);
          }}
        >
          Payment
        </button>
      </div>
      <Footer />
    </div>
  );
}
