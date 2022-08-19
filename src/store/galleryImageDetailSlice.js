import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// created  initial state
const initialState = {
  images: [],
  loading: false,
  error: "",
};
// HFoOCeg
export const fetchGalleryImage = createAsyncThunk(
  "images/fetchImages",
  async (id) => {
    const url = `https://api.imgur.com/3/gallery/${id}`;
    const config = {
      headers: {
        Authorization: "Bearer 897ba61182d65604b92d667a3c8cf1856fbc5906 ",
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  }
);

const GalleryImageDettails = createSlice({
  name: "imagesDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGalleryImage.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGalleryImage.rejected, (state, action) => {
      state.loading = false;
      state.images = [];
      state.error = action.error.message;
    });
  },
});

export default GalleryImageDettails.reducer;
