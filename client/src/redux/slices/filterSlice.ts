import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectSort = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
