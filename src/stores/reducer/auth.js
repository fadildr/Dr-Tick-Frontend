const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA
  message: "",
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "LOGOUT_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case "LOGOUT_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};
export default auth;
