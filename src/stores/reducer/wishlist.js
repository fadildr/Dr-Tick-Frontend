const initialState = {
  data: [],
};
const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_PENDING": {
      return {
        ...state,
        data: [],
      };
    }

    case "ADD_WISHLIST_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }

    case "ADD_WISHLIST_REJECT": {
      return {
        ...state,
        data: [],
      };
    }
    case "DELETE_WISHLIST_PENDING": {
      return {
        ...state,
        data: [],
      };
    }

    case "DELETE_WISHLIST_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }

    case "DELETE_WISHLIST_REJECT": {
      return {
        ...state,
        data: [],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
export default wishlist;
