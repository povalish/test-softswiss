/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';


export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    realFilter: '',
    providerFilter: '',
    currentPage: 1,
    availableRealFilters: [],
    availableProviderFilters: [],
  },
  reducers: {
    setRealFilter: (state, action) => {
      state.realFilter = action.payload;
    },
    setProviderFilter: (state, action) => {
      state.providerFilter = action.payload;
    },
    setAvailableRealFilters: (state, action) => {
      state.availableRealFilters = action.payload;
    },
    setAvailableProviderFilters: (state, action) => {
      state.availableProviderFilters = action.payload;
    },
    loadNextPage: (state) => {
      state.currentPage += 1;
    },
    setInitPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const {
  setRealFilter,
  setProviderFilter,
  setAvailableRealFilters,
  setAvailableProviderFilters,
  loadNextPage,
  setInitPage,
} = filtersSlice.actions;
export default filtersSlice.reducer;
