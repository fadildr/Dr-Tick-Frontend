import axios from "../../utils/axios";

export const getDataUser = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};
export const updateDataUser = (data, id) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/${id}`, data),
  };
};
export const updateImageUser = (data, id) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/updateImage/${id}`, data),
  };
};
export const updatePasswordUser = (data, id) => {
  return {
    type: "UPDATE_PASSWORD_USER",
    payload: axios.patch(`user/updatePassword/${id}`, data),
  };
};
