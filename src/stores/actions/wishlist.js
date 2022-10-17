import axios from "../../utils/axios";
export const addWishlist = (data) => {
  return {
    type: "ADD_WISHLIST",
    payload: axios.post("wishlist", data),
  };
};
export const deleteWishlist = (id) => {
  return {
    type: "DELETE_WISHLIST",
    payload: axios.delete(`wishlist/${id}`),
  };
};
export const getWishlistByUserId = (data) => {
  return {
    type: "DELETE_WISHLIST",
    payload: axios.get("wishlist/?userId=", data),
  };
};
