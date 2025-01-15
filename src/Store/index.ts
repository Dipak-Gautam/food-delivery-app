import { configureStore, createSlice } from "@reduxjs/toolkit";
import updateCart from "../InitialRenderFunctions/addItemToCart";
import { ICartData } from "../schema/Store/cartData.schema";
import removeItemFromCart from "../InitialRenderFunctions/removeItemFromCart";
import saveMessage from "../InitialRenderFunctions/saveMessage";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as ICartData[],
  reducers: {
    addItemCart: (state, action) => {
      const updatedCart = updateCart(action.payload, state);
      return updatedCart;
    },
    removeItemCart: (state, action) => {
      const updatedCart = removeItemFromCart(action.payload, state);
      return updatedCart;
    },
    clearCart: (state) => {
      state = [];
      return state;
    },
  },
});

const loginTokenSlice = createSlice({
  name: "loginToken",
  initialState: "",
  reducers: {
    addToken: (state, action) => {
      state = action.payload;
      console.log("token", action.payload);
      return state;
    },
  },
});

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const messageSlice = createSlice({
  name: "message",
  initialState: [] as any,
  reducers: {
    addMessage: (state, action) => {
      state = [...state, action.payload];
      saveMessage(state);
      return state;
    },
    loadMessage: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const foodStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    loginToken: loginTokenSlice.reducer,
    product: productSlice.reducer,
    user: userSlice.reducer,
    message: messageSlice.reducer,
  },
});

export const cartAction = cartSlice.actions;
export const loginTokenAction = loginTokenSlice.actions;
export const productAction = productSlice.actions;
export const userAction = userSlice.actions;
export const messageAction = messageSlice.actions;

export default foodStore;
