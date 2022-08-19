import { configureStore } from "@reduxjs/toolkit";
import galleryImageDetail from "./galleryImageDetailSlice";
import gallerySlice from "./gallerySlice";

export const Store = configureStore({
  reducer: {
    images: gallerySlice,
    imageDetail: galleryImageDetail,
  },
});
