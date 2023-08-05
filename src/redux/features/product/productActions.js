import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../components/Helper/Http";


export const productAll = createAsyncThunk(
  "products/all",
  async (alluser, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/products`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/products/${id}`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);