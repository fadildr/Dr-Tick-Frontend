import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./index.css";
export default function Payment() {
  const { state } = useLocation();
  const data = state.dataOrder[0];

  return (
    <div>
      <Header />
      <div className="container bg-white container-payment">
        <h5 className="mb-3 text-left">Ticket detail</h5>
        <div className="desc-footer d-flex  text-center ">
          <div className="desc-footer-left">
            <p>Ticket Section</p>
            <p>Quantity</p>
            <p>Total Payment</p>
          </div>

          <div className="desc-footer-right">
            <p>{data.seat}</p>
            <p>{data.qty}</p>
            <p>Rp{data.price}</p>
          </div>
        </div>
        <button
          type="button"
          //   href="payment.html"
          className="btn rounded-4 btn-primary w-100 my-4 mb-2"
        >
          Chegk Out
        </button>
      </div>
      <Footer />
    </div>
  );
}
