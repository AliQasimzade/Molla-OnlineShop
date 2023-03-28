import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};
const baseUrl = import.meta.env.VITE_BASE_URL;
export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  const response = await axios.get(`${baseUrl}/products`);
  return response.data;
});
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, value) => {
      state.products = value.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
