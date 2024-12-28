import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemCart: () => {
      console.log("add item cart");
    },
    removeItemCart: () => {
      console.log("remove  item cart");
    },
  },
});

const foodStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartAction = cartSlice.actions;

export default foodStore;
