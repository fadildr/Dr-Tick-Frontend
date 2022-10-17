import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import axios from "../../utils/axios";
import SeatPosition from "../../components/SeatPosition";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ticketREG from "../../assets/img/reg.png";
import ticketVIP from "../../assets/img/vip.png";
import ticketVVIP from "../../assets/img/vvip.png";
// import { getBookingByUserId } from "../../stores/actions/booking";

// import character__img from "../../assets/img/grup-ticket.png";
// LIST SECTION
// VVIP = VVIP(1...4)-1
// VIP = VIP(1...4)-(1...7)
// REG = REG(1...4)-(1...9)

export default function Order() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  const { id } = useParams();
  const data = dataOrder;
  console.log(data);
  console.log(id);
  console.log(setFullSeat, setListBooking);
  // console.log(listBooking);
  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = async () => {
    try {
      const result = await axios.get(`booking/event/${id}`);
      console.log(result);
      setFullSeat(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataEvent = async () => {
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
    try {
      const result = await axios.get(`event/${id}`);
      console.log(result);

      setDataEvent(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };
  // console.log(listBooking);
  const handleOrderSeat = () => {
    navigate("/payment", {
      state: {
        dataOrder,
        eventId: id,
      },
    });
  };
  // console.log(dataOrder);
  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };
  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };
  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };
  // console.log(setDataEvent);
  return (
    <>
      <Header />
      {/* Hello world */}

      <div className="container container-order rounded-5  bg-white">
        {/* <div className="col-6 content__img">
          <img src={character__img} alt="" className="character__img" />
        </div> */}
        <div className="rotate-seat">
          <SeatPosition
            width="100%" // MEMBERIKAN BESARAN PADA POLA SEAT
            height="100%" // MEMBERIKAN TINGGI PADA POLA SEAT
            fullSeat={fullSeat}
            activeSeat={activeSeat}
            handleSelectSeat={handleSelectSeat}
          />
        </div>

        <div className="col-6  align-items-center justify-content-center contents   ">
          {/* <div class="justify-content-center bg-primary"> */}
          <h4>Tickets</h4>
          {activeSeat.length > 0 ? (
            <div className="ticket-scrolling">
              {dataOrder.map((item, index) => {
                const data = item.seat.split("-");
                const dataSeat = listBooking.filter(
                  (itemSeat) => itemSeat.section === item.seat
                );
                return (
                  <div className="my-3 " key={index}>
                    <div className="d-flex">
                      <img
                        src={
                          data[0].includes("VVIP")
                            ? ticketVVIP
                            : data[0].includes("VIP")
                            ? ticketVIP
                            : ticketREG
                        }
                        className="ticket-icon"
                        alt="ticket icon"
                      />
                      <label className="ms-3 d-flex">
                        <div>
                          Section {data[0]}, Row {data[1]}
                          <br />[
                          {dataSeat.length > 0
                            ? dataSeat[0].available
                            : data[0].includes("VVIP")
                            ? 10
                            : data[0].includes("VIP")
                            ? 20
                            : 30}{" "}
                          Seats Available]
                        </div>
                      </label>
                      <br />

                      <label className="price">Rp.{item.price}</label>
                    </div>
                    <div className="text-center mt-2">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => decreaseOrderSeat(item)}
                      >
                        -
                      </button>
                      <h5 className="d-inline mx-2">{item.qty}</h5>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => increaseOrderSeat(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center h-50">
              <h6>Select Seat</h6>
            </div>
          )}
          <hr />
          <div className="d-grid gap-2 justify-content-center align-item-center ">
            <button
              className="btn-order btn btn-primary"
              onClick={handleOrderSeat}
            >
              Checkout
            </button>
            <button
              className="btn-clear btn btn-danger"
              onClick={clearOrderSeat}
            >
              <span className="lnr lnr-trash"></span>
            </button>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}
