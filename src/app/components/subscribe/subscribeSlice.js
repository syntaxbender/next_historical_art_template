import { createSlice } from '@reduxjs/toolkit';

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    email: "",
    message: "",
    isAgreed: false
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
        state.message = action.payload;
    },
    setAgree: (state, action) => {
        state.isAgreed = action.payload;
    },
  },
});

export const {
    setEmail,
    setMessage,
    setAgree
} = subscribeSlice.actions;

export const messageState = (state) => state.subscribe.message;
export const emailState = (state) => state.subscribe.email;
export const isAgreedState = (state) => state.subscribe.isAgreed;

export default subscribeSlice.reducer;
