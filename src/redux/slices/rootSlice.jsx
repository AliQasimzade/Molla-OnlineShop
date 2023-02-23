import { combineReducers } from "@reduxjs/toolkit";
import basketSlice from './basketSlice'
import productsSlice from './productsSlice'
import wishListSlice from './wishListSlice'
const rootReducer = combineReducers({
    products: productsSlice,
    basket: basketSlice,
    wishlist: wishListSlice
})

export default rootReducer;