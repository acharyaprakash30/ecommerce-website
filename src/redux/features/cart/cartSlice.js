// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
    totalItem:0,
    subTotal:0
  },
  reducers: {
    addToCart: (state, action) => {
        const {id,price,title,image}= action.payload;
      const itemInCart = state.cartItem.find((item) => item.id === id);
      let total = price;
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.total=(Number(itemInCart.total)+(Number(price))).toFixed(2);
      } else {
        state.cartItem.push({ id,price,title,image,total,quantity: 1 });
      }
      state.totalItem = state.cartItem.length;
      state.subTotal = (Number(state.subTotal) + Number(price)).toFixed(2);

    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      item.quantity++;
      item.total=(Number(item.total) + Number(item.price)).toFixed(2);
      state.subTotal = (Number(state.subTotal) + Number(item.price)).toFixed(2);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
        item.total = (Number(item.total)-Number(item.price)).toFixed(2);
        state.subTotal = (Number(state.subTotal) - Number(item.price)).toFixed(2);
      }

    },
    removeItem: (state, action) => {
      const remainingItem = state.cartItem.filter((item) => item.id !== action.payload);
      const removeItem = state.cartItem.find((item)=>item.id === action.payload);
      state.subTotal = (Number(state.subTotal) - Number(removeItem.total)).toFixed(2);
      state.totalItem--;
      state.cartItem = remainingItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;