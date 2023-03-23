import { combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import wishListSlice from "./wishListSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  basket: basketSlice,
  wishlist: wishListSlice,
  user: userSlice,
});

export default rootReducer;
