import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
    loader: false,
}

export const preloaderSlice = createSlice({
  name: 'preloader',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoaderStatus: (state, action) => {
        state.loader = action.payload;
    },

  }
})

export const { setLoaderStatus } = preloaderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoaderDone = (state) => state.preloader.loader

export default preloaderSlice.reducer