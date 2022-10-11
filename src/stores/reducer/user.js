const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        data: {},
      };
    }
    case "GET_USER_BY_ID_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data[0],
      };
    }
    case "GET_USER_BY_ID_REJECTED": {
      return {
        ...state,
        data: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
