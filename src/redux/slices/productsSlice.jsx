import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 products:[]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   getProducts: (state, value) => {
      state.products = value.payload
   }
  },
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer