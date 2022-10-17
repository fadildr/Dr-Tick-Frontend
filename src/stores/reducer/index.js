import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import event from "./event";
import auth from "./auth";
import wishlist from "./wishlist";
export default combineReducers({
  counter,
  user,
  event,
  auth,
  wishlist,
});
