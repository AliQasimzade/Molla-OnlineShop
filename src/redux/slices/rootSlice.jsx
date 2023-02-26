import { combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import productsSlice from "./productsSlice";
import wishListSlice from "./wishListSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  basket: basketSlice,
  wishlist: wishListSlice,
  user: userSlice,
  products:productsSlice
});

export default rootReducer;
