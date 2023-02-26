import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removeBasketItem: (state, action) => {
      const filterBasket = state.basket.filter(
        (bas) => bas._id !== action.payload._id
      );
      state.basket = [...filterBasket];
    },
    incQuantity: (state, action) => {
       state.basket = state.basket.map(bas => {
        if(bas._id === action.payload._id) {
          bas.count += 1
        }
        return bas
      })
     
    },
     decQuantity: (state, action) => {
      if(action.payload.count === 1) {
        return state
      }else {
        state.basket = state.basket.map(bas => {
          if(bas._id === action.payload._id) {
            bas.count -= 1
          }
          return bas
        })
      }
    },
    resetBasket: (state) => {
      state.basket = []
    }
  },
});

export const { addBasket, removeBasketItem, incQuantity,decQuantity,resetBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
