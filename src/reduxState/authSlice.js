import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const id = uuidv4();
const initialState = {
  id,
  userName: "mido",
  userEmail: "test@gmail.com",
  userPassword: "test12345",
  isLoggedIn: false
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = !state.isLoggedIn;
    }
  }
});
export const { logIn } = authSlice.actions;
export default authSlice.reducer;
