import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    listProducts: (state, action) => {
      const product = {};
    },
  },
});

export const { listProducts } = productsSlice.actions;

export default productsSlice.reducer;
