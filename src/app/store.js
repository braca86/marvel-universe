import { configureStore } from "@reduxjs/toolkit";
import marvelReducer from "../features/marvel/marvelSlice";

export default configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});
