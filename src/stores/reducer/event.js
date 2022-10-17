const initialState = {
  data: [], // UNTUK MENAMPUNG LIST DATA EVENT
  isLoading: false,
  isError: false,
  message: "",
};

const Event = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "GET_DATA_EVENT_PENDING": {
      return {
        ...state,
        data: [],
      };
    }
    case "GET_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case "GET_DATA_EVENT_REJECTED": {
      return {
        ...state,
        data: [],
      };
    }
    case "CREATE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "CREATE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "UPDATE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    case "DELETE_DATA_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "DELETE_DATA_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg,
      };
    }
    case "DELETE_DATA_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default Event;
