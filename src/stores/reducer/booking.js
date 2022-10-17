const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA EVENT
  isLoading: false,
  isError: false,
  message: "",
};
const Booking = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_BOOKING_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case "GET_DATA_BOOKING_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    case "CREATE_DATA_BOOKING_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "CREATE_DATA_BOOKING_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Booking;
