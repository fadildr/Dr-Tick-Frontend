import axios from "../../utils/axios";

export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: axios.post("auth/logout", data),
  };
};
// export default logout;
