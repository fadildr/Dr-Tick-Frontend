const initialState = {
  data: [],
  message: "",
};
const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_PENDING": {
      return {
        ...state,
        data: [],
        message: "",
      };
    }

    case "ADD_WISHLIST_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }

    case "ADD_WISHLIST_REJECT": {
      return {
        ...state,
        data: [],
        message: "",
      };
    }
    case "DELETE_WISHLIST_PENDING": {
      return {
        ...state,
        data: [],
        message: "",
      };
    }

    case "DELETE_WISHLIST_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        message: action.payload.data.msg,
      };
    }

    case "DELETE_WISHLIST_REJECT": {
      return {
        ...state,
        data: [],
        message: "",
      };
    }

    default: {
      return state;
    }
  }
};
export default wishlist;
