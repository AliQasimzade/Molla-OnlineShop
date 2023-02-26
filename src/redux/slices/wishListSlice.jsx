import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 wishlist:[]
}

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
   addWish:(state, action) => {
     state.wishlist = [...state.wishlist, action.payload]
   },
   removeWishItem: (state, action) => {
     const filterWishlist = state.wishlist.filter(wish => wish._id !== action.payload._id);
     state.wishlist = [...filterWishlist]
   },
   resetWishlist: (state) => {
    state.wishlist = []
   }
  },
})

export const { addWish,removeWishItem,resetWishlist } = wishListSlice.actions

export default wishListSlice.reducer