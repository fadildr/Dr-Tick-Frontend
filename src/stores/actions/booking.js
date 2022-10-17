import axios from "../../utils/axios";

export const getBookingByUserId = (data, userId) => {
  return {
    type: "GET_DATA_BOOKING",
    payload: axios.get(`booking/${userId}`, data),
  };
};

export const createBooking = (id) => {
  return {
    type: "CREATE_DATA_BOOKING",
    payload: axios.post(`booking/${id}`),
  };
};
export const getBookingSection = (eventId) => {
  return {
    type: "GET_BOOKING_SECTION",
    payload: axios.post(`booking/event/${eventId}`),
  };
};
