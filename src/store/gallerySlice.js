import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// created  initial state
const initialState = {
  images: [],
  loading: false,
  error: "",
};
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (section) => {
    const url = `https://api.imgur.com/3/gallery/${section.section}/${section.sortFilter}/${section.window}/?showViral=${section.showViral}&mature=false&album_previews=true`;
    const config = {
      headers: {
        Authorization: "Bearer 897ba61182d65604b92d667a3c8cf1856fbc5906 ",
      },
    };
    const response = await axios.get(url, config);
    return response.data;
  }
);

const galleryImages = createSlice({
  name: "images",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
      state.error = "";
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false;
      state.images = [];
      state.error = action.error.message;
    });
  },
});
export default galleryImages.reducer;
