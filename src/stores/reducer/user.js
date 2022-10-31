const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        data: [],
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
        data: [],
      };
    }
    case "UPDATE_DATA_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "UPDATE_DATA_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    }
    case "UPDATE_IMAGE_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_IMAGE_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_IMAGE_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
