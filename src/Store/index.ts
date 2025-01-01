import { configureStore, createSlice } from "@reduxjs/toolkit";
import updateCart from "../InitialRenderFunctions/addItemToCart";
import { ICartData } from "../schema/Store/cartData.schema";
import removeItemFromCart from "../InitialRenderFunctions/removeItemFromCart";

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
  },
});

const loginTokenSlice = createSlice({
  name: "loginToken",
  initialState: "",
  reducers: {
    addToken: (state, action) => {
      state = action.payload;
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
      console.log("message", state);
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
