import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import SeatPosition from "../../components/SeatPosition";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ticketREG from "../../assets/img/reg.png";
import ticketVIP from "../../assets/img/vip.png";
import ticketVVIP from "../../assets/img/vvip.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Order() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const userId = user.data.userId;

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);
  console.log(setListBooking);
  const getDataBooking = async () => {
    try {
      const result = await axios.get(`booking/event/${id}`);

      setFullSeat(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataEvent = async () => {
    // https://www.notion.so/Modul-Event-413ecaad2dd04d4eb0c6c2afc4f50888
    try {
      const result = await axios.get(`event/${id}`);

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

  const dataSection = dataOrder?.map((x) => {
    //mengambil data section pada ticket yang di click
    return `${x.seat}`;
  });
  const dataQty = dataOrder?.map((x) => {
    //mengambil data quantity pada ticket yang di click
    return `${x.qty}`;
  });
  const quantity = dataQty?.map((str) => {
    //menjumlahkan total ticket pada ticket yang di click
    return Number(str);
  });
  const dataPrice = dataOrder?.map((x) => {
    //mengambil data quantity pada ticket yang di click
    return `${x.price}`;
  });
  const totalPrice = dataPrice?.map((str) => {
    //menjumlahkan total ticket pada ticket yang di click
    return Number(str);
  });

  const handleOrderSeat = async () => {
    setLoading(true);
    const dataBooking = {
      eventId: id,
      section: dataSection,
      totalTicket: quantity.reduce((a, b) => a + b),
      totalPayment: totalPrice.reduce((a, b) => a + b),
      statusPayment: "true",
    };

    try {
      const result = await axios.post(`booking/${userId}`, dataBooking);
      setLoading(false);
      const resultBooking = result.data.data;
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: result.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/payment", {
        state: resultBooking,
      });
    } catch (error) {
      setLoading(false);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed Order Event",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
              disabled={dataOrder.length < 1 || loading ? true : false}
            >
              {loading ? (
                <div className="spinner-border text-white" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                "Check Out"
              )}
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
