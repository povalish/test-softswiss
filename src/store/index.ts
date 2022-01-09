import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filters';


const store = configureStore({
  reducer: {
    filters: filtersSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
