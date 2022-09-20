import { configureStore } from "@reduxjs/toolkit";
import datastore from "./Data.js";

export default configureStore({
  reducer: {
    datastore,
  },
});
