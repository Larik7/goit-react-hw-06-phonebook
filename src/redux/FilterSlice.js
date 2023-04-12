import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {query: ''},
  reducers: {
    setFilter(state, action) {
      state.query = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;