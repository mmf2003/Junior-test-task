import { configureStore } from '@reduxjs/toolkit';
import horsesReducer from '../features/horses/horsesSlice';

export const store = configureStore({
  reducer: {
    horses: horsesReducer,
  },
});