import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice';
import { cartReducer } from './features/cart/cartSlice';
const reducer = {
    product:productSlice,
    cart:cartReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;