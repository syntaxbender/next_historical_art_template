import { createSlice } from '@reduxjs/toolkit';

const mobMenuSlice = createSlice({
  name: 'mobMenu',
  initialState: {
    isActive: false,
    isSubsActive: {},
    activeIndex:0
  },
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
    setActiveIndex: (state, action) => {
        state.activeIndex = action.payload;
    },
    setSubsActive: (state, action) => {
      const { index, value } = action.payload;
      if(state.isSubsActive[index] == null) state.isSubsActive[index] = {};
      state.isSubsActive[index] = value;
    },
  },
});

export const {
    setActive,
    setSubsActive,
    setActiveIndex
} = mobMenuSlice.actions;

export const isActiveState = (state) => state.mobMenu.isActive;
export const activeIndexState = (state) => state.mobMenu.activeIndex;
export const isSubsActiveState = (state) => state.mobMenu.isSubsActive;

export default mobMenuSlice.reducer;
