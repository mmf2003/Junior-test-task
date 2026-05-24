import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isRunning: false,
};

const horsesSlice = createSlice({
  name: 'horses',
  initialState,
  reducers: {
    setHorses: (state, action) => {
      state.items = action.payload;
      state.isRunning = true;
    },
    resetRace: (state) => {
      state.items = [];
      state.isRunning = false;
    },
  },
});

export const { setHorses, resetRace } = horsesSlice.actions;

export default horsesSlice.reducer;