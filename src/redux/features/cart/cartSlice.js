// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
    totalItem:0,
  },
  reducers: {
    addToCart: (state, action) => {
        const {id,price,title,image}= action.payload;
      const itemInCart = state.cartItem.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItem.push({ id,price,title,image, quantity: 1 });
      }
      state.totalItem = state.cartItem.length
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItem.filter((item) => item.id !== action.payload);
      state.cartItem = removeItem;
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