import { configureStore } from "@reduxjs/toolkit";
import notes from "./noteSlice";
import auth from "./authSlice";

const store = configureStore({ reducer: { notes, auth } });
export default store;
